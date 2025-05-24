from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer
from .models import Contacto
from .serializers import ContactoSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated

class ProductoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    # resto igual


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['marca__nombre', 'codigo_ferremas']


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer
    http_method_names = ['post']


class ProductoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Producto.objects.prefetch_related('precios', 'marca').all()
    serializer_class = ProductoSerializer
