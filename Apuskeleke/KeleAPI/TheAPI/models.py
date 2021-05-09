from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Measurement(models.Model):
    First_Name = models.CharField(max_length = 20, null=False, blank=False)
    Last_Name = models.CharField(max_length = 20, null=False, blank=False)
    Contact_Number = models.CharField(max_length = 15, default='+233',null=False, blank=False)
    Bust = models.FloatField()
    Waist = models.FloatField(default=0)
    Shoulder_to_Waist = models.FloatField(blank=True, null=True)
    Across_Front = models.FloatField(blank=True, null=True)
    Across_Back = models.FloatField(blank=True, null=True)
    Shoulder_to_Hip = models.FloatField(blank=True, null=True)
    Lower_Waist = models.FloatField(blank=True, null=True)
    Hips = models.FloatField()
    Long_Sleeve = models.FloatField(blank=True, null=True)
    Short_Sleeve = models.FloatField(blank=True, null=True)
    Skirt_Length = models.FloatField(blank=True, null=True)
    Dress_Length = models.FloatField(blank=True, null=True)
    
    def __str__(self):
        return self.First_Name


