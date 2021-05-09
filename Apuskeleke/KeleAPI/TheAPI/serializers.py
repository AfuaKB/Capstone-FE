from rest_framework import serializers
from . models import Measurement

#The Serializer is what allows complex queries to be returned as JSON or other simple content formats

class MeasurementSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Measurement
        fields = '__all__'

# {
# "bust": "39",
# "waist": "34",
# "hips":"44",
# "jeans_size":"16"
# }

# AttributeError: module 'rest_framework.serializers' has no attribute 'ModelSerializers