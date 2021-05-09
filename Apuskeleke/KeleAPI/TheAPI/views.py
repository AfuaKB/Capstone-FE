# Importing relevant libraries
import pickle
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
import numpy as np
import joblib
#from joblib import dump, load
#from django.core import serializers
from . serializers import MeasurementSerializer
from . models import Measurement

# Create your views here.
### mmake this function render landing page ##


@api_view(['GET'])
def index_page(request):
    return_data = {
        "error": "0",
        "message": "Successful",
    }
    return Response(return_data)

# The first endpoint will handle both creations (POST) and listing (GET)
# Giving an Operational Error which I can't find #### ================>>>>> CHECK THIS ================>>>>>>>>


@api_view(['GET', 'POST'])
def measurements_list(request):
    if request.method == 'GET':
        data = Measurement.objects.all()
        serializer = MeasurementSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
        

    elif request.method == 'POST':
        serializer = MeasurementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Here, the first endpoint handles remove (DELETE) or update (PUT) of a measurement


@api_view(['PUT', 'DELETE', 'GET'])
def measurements_details(request, pk):
    try:
        measurement = Measurement.objects.get(pk=pk)
        serializer = MeasurementSerializer(measurement, many=False)
    except Measurement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = MeasurementSerializer(
            instance=measurement, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        measurement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    return Response(serializer.data)


# this funtion will return a list view of all the measurements entered by a user
# @api_view(['GET'])
# def measurement_list(request):
# 	measurements = Measurement.objects.all().order_by('-id')
# 	serializer = MeasurementSerializers(measurements, many=True)
# 	return Response(serializer.data)

# the idea here is that the funtion will return a details view of a single measurement entered by a user
# @api_view(['GET'])
# def measurement_details(request, pk):
# 	measurements = Measurement.objects.get(id=pk)
# 	serializer = MeasurementSerializers(measurements, many=False)
# 	return Response(serializer.data)
# Django may automatically allow the view of information that's been already entered

# the idea here is that when the fp enters the data, it is stored in the database if it is valid
# @api_view(['POST'])
# def create_measurement(request):
# 	serializer = MeasurementSerializers(data=request.data)

# 	if serializer.is_valid():
# 		serializer.save()

# 	return Response(serializer.data)

#the idea here is that the fp can update stored data
# @api_view(['POST'])
# def update_measurement(request, pk):
# 	measurement = Measurement.objects.get(id=pk)
# 	serializer = MeasurementSerializers(instance=measurement, data=request.data)

# 	if serializer.is_valid():
# 		serializer.save()

# 	return Response(serializer.data)

# this is the function that triggers the Machine Learning model to make predictions on the data
### FIGURE IT OUT HOW TO TRIGGER IT PERIODICALLY AS IT SHOULD NOT RUN EVERY TIME NEW ENTRIES ARE MADE ###
# TESTING THIS METHOD, FEEDBACK IS JOBLIB IS NOT DEFINED, HOWEVER IT IS IN THE IMPORTS.
def normalization(x):
    train_mean = np.array([39.838028,34.014085,44.102113,16.098592])
    train_std = np.array([4.964715,5.371866,4.659970,4.660334])
    return (x - train_mean) / train_std

@api_view(["POST"])
def size_predictor(request):
    # try:
        bust = request.data.get('bust', None)
        waist = request.data.get('waist', None)
        hips = request.data.get('hips', None)
        top_size = request.data.get('top_size', None)
        jeans_size = request.data.get('jeans_size', None)
        fields = [bust, waist, hips, jeans_size]

        if not None in fields:

            # Datapreprocessing Convert the values to float
            # Information from the web is collected as string
            bust = float(bust)
            waist = float(waist)
            hips = float(hips)
            jeans_size = float(jeans_size)
        
            result = [bust, waist, hips, jeans_size]
            sample_result = [bust, waist, hips, jeans_size]
            normalized_sample_result = [normalization(sample_result)]
            print(normalized_sample_result)

            # Passing data to model & loading the model from disks

            model_path = '/Users/afrogal/Dev/Apuskeleke/KeleAPI/TheAPI/regression_mod/joblib_model.joblib'
            model = joblib.load(model_path)
            prediction = model.predict([result])[0]
            prediction = model.predict(normalized_sample_result)[0]
            #confidence_score = np.max(model.predict_proba([result]))*100
            predictions = {
                'error': '0',
                'message': 'Successful',
                'prediction': prediction,
                #'confidence_score': conf_score
            }
        else:
            predictions = {
                'error': '1',
                'message': 'Invalid Parameters'
            }
    # except Exception as e:
    #     raise e
    #     predictions = {
    #         'error': '2',
    #         "message": str(e)
    #     }

        return Response(predictions)
