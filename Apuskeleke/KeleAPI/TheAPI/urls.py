from django.urls import path
from TheAPI import views

urlpatterns = [
    path('',views.index_page),
    path('predict/', views.size_predictor, name = 'predict'),
    path('measurements_list/', views.measurements_list, name = 'list'),
    path('measurements_details/<pk>', views.measurements_details, name = 'details'),
    # path('create_measurement', views.create_measurement, name = 'create measurement'),
    # path('update_measurement/<pk>', views.update_measurement, name = 'update measurement')
]    