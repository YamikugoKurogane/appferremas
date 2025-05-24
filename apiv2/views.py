# api/views.py
from rest_framework import viewsets
from .models import Marca, Producto
from .serializers import MarcaSerializer, ProductoSerializer

class MarcaViewSet(viewsets.ModelViewSet):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
