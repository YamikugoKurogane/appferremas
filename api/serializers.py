from rest_framework import serializers
from .models import Producto, Precio, Marca
from .models import Contacto
from rest_framework import serializers
from .models import Producto, Marca, Precio

class PrecioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Precio
        fields = ['fecha', 'valor']
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = '__all__'


class PrecioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Precio
        fields = ['fecha', 'valor']

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ['nombre']

class ProductoSerializer(serializers.ModelSerializer):
    precios = PrecioSerializer(many=True)
    marca = MarcaSerializer()

    class Meta:
        model = Producto
        fields = ['codigo_ferremas', 'codigo_marca', 'nombre', 'marca', 'stock', 'precios']
