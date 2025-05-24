from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import  User
from django import forms
class Registro(UserCreationForm):
    
    fields = ("first_name", "last_name", "email", "username", "password1", "password2")
    first_name = forms.CharField(max_length=20, help_text ="Ingrese su Nombre")
    last_name = forms.CharField(max_length=20, help_text ="Ingrese su Apellido")
    email = forms.CharField(max_length=200, help_text ="Ingrese su Email")

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ( "username", "first_name", "last_name", "email", "password1", "password2" )