# Generated by Django 3.2.2 on 2021-05-07 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TheAPI', '0004_remove_measurement_waist'),
    ]

    operations = [
        migrations.AddField(
            model_name='measurement',
            name='Waist',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='measurement',
            name='Contact_Number',
            field=models.CharField(default='+233', max_length=15),
        ),
        migrations.AlterField(
            model_name='measurement',
            name='First_Name',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='measurement',
            name='Last_Name',
            field=models.CharField(max_length=20),
        ),
    ]
