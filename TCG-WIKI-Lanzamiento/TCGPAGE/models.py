from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
# Create your models here.




class ProductosGlobales(models.Model):
    id= models.CharField(max_length=4,primary_key=True)
    nombre = models.CharField(max_length=200)
    imagen = models.CharField(max_length=200)
    precio = models.IntegerField()

class ProductosVarios(models.Model):
    id= models.CharField(max_length=4,primary_key=True)
    nombre = models.CharField(max_length=200)
    imagen = models.CharField(max_length=200)
    stack =  models.IntegerField()
    precio = models.IntegerField()

class Venta(models.Model):
    id= models.AutoField(primary_key=True)
    fecha = models.CharField(max_length=20)
    cliente = models.ForeignKey(to=User, on_delete=models.CASCADE)
    total =  models.IntegerField()


class Detalle(models.Model):
    id= models.AutoField(primary_key=True)
    venta = models.ForeignKey(to=Venta, on_delete=models.CASCADE)
    producto = models.ForeignKey(to=ProductosVarios, on_delete=models.CASCADE)
    cantidad =  models.IntegerField()
    precio = models.IntegerField()