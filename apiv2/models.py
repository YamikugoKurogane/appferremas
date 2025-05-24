# api/models.py
from django.db import models

# models.py

class TipoMaterial(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre



class Marca(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    codigo_ferremas = models.CharField(max_length=20, unique=True)
    nombre = models.CharField(max_length=255)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE, related_name='productos')
    stock = models.IntegerField(default=0)
    precio = models.IntegerField(default=0)  # Si quieres decimal, cambia a DecimalField
    tipo_material = models.ForeignKey(TipoMaterial, on_delete=models.CASCADE, null=True, blank=True)
    imagen_url = models.URLField(max_length=500, blank=True, null=True)  # nuevo campo


    def __str__(self):
        return f"{self.nombre} ({self.codigo_ferremas})"
