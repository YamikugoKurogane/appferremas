from django.db import models

class Marca(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    codigo_ferremas = models.CharField(max_length=20, unique=True)
    codigo_marca = models.CharField(max_length=20)
    nombre = models.CharField(max_length=255)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    stock = models.IntegerField(default=0)
    precio = models.IntegerField(default=0)  # o DecimalField si usas decimales

    def __str__(self):
        return f"{self.nombre} - {self.codigo_ferremas}"

class Precio(models.Model):
    producto = models.ForeignKey(Producto, related_name='precios', on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)

class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    mensaje = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)
