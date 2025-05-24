from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import  User
from django import forms


class RegistroForm(UserCreationForm):
    password_secreta = forms.CharField(
        widget=forms.PasswordInput,
        label="Contraseña de Registro"
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2', 'password_secreta']

    def clean_password_secreta(self):
        clave = self.cleaned_data.get('password_secreta')
        if clave != '277353':
            raise forms.ValidationError("La contraseña de registro es incorrecta.")
        return clave