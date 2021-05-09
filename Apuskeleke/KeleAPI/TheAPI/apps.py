# from django.apps import AppConfig
# import pandas as pd
# from joblib import load
# import os

# class TheAPIConfig(AppConfig):
#     name = 'TheAPI'
#     BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#     CLASSIFIER_FOLDER = os.path.join(BASE_DIR, 'classifier')
#     CLASSIFIER_FILE = os.path.join(CLASSIFIER_FOLDER, "joblib_model.joblib")
#     classifier = load(CLASSIFIER_FILE)

from django.apps import AppConfig


class ApiConfig(AppConfig):
    name = 'TheAPI'