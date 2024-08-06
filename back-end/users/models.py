from django.db import models

# Create your models here.

class Users(models.Model):

    GENDER_CHOISES = [("F","Femenino"),("M","Masculino"),("O","otro"),("NA","Prefiero no decirlo")]

    full_name = models.CharField(max_length=200)
    age = models.CharField(max_length=3)
    gender = models.CharField(max_length=20,choices=GENDER_CHOISES)
    cedula = models.CharField(max_length=11,unique=True)
    cell_phone_number = models.CharField(max_length=11)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.full_name
