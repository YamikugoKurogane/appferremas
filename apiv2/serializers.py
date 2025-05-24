# api/serializers.py
from rest_framework import serializers
from .models import Marca, Producto, TipoMaterial

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ['id', 'nombre']

tipo_material_id = serializers.PrimaryKeyRelatedField(
    source='tipo_material',
    queryset=TipoMaterial.objects.all()
)


class TipoMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoMaterial
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    tipo_material = TipoMaterialSerializer(read_only=True)
    tipo_material_id = serializers.PrimaryKeyRelatedField(
        queryset=TipoMaterial.objects.all(), source='tipo_material', write_only=True
    )

    class Meta:
        model = Producto
        fields = ['id', 'codigo_ferremas', 'nombre', 'marca', 'marca_id', 'stock', 'precio', 'tipo_material', 'tipo_material_id','imagen_url',]



