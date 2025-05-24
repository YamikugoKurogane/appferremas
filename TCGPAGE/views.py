from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.contrib.auth.views import logout_then_login
import requests

def carrito_view(request):
    carro = request.session.get('carro', [])

    # Calcular total CLP
    total_clp = sum(item[5] for item in carro) if carro else 0

    # Obtener tasa de cambio desde API
    try:
        response = requests.get("https://economia.awesomeapi.com.br/json/last/USD-CLP")
        result = response.json()
        tasa_cambio = float(result['USDCLP']['bid'])
    except:
        tasa_cambio = 0  # Valor de respaldo o error

    total_usd = round(total_clp / tasa_cambio, 2) if tasa_cambio else 0

    context = {
        'carro': carro,
        'item': [None, None, None, None, None, None, total_clp],
        'tasa_cambio': tasa_cambio,
        'total_usd': total_usd
    }

    return render(request, 'TCGPAGE/carrito.html', context)



# Create your views here.
def home(request):
    return render(request,'TCGPAGE/index.html')

def productos(request):
    prodGlob = ProductosVarios.objects.all()
    return render(request,'TCGPAGE/productos.html',{'prodGlob':prodGlob})

def logout(request):
    request.session.flush()
    return redirect(to="home")

def myl(request):

    return render(request,'TCGPAGE/MyL.html')

def yugi(request):
   return render(request,'TCGPAGE/YuGiOh.html')

def poke(request):
    return render(request,'TCGPAGE/Pokemon.html')


def magic(request):
    return render(request,'TCGPAGE/MAgic-Gathering.html')

def lol(request):
    return render(request,'TCGPAGE/LoL.html')

def login(request):
    return render(request,'TCGPAGE/login.html')

def carro(request):
    return render(request,'TCGPAGE/carrito.html', {"carro":request.session.get("carro",[])} )

def borrarSecion(request):
    request.session.flush()
    return redirect(to="carro")


def delToCar(request, id):
    carro = request.session.get("carro", [])
    for item in carro:
        if item[0] == id:
            if item[4] > 1:
                item[4] -= 1
                item[5] = item[4] * item[3]
                break
            else:
                carro.remove(item)
                break  # Asegúrate de romper el bucle después de eliminar el elemento
    request.session["carro"] = carro
    return redirect("carro")



                                                                                                                                       
def addToCar(request, id):
    prodGlob = ProductosVarios.objects.get(id=id)
    carro= request.session.get("carro",[])
    totalfinal =0
    for item in carro:
        if item [0]==id:
            item [4] +=1
            item [5] = item [4] * item[3]
            totalfinal += item[5]
            item[6] = totalfinal
            break
    else:
        totalfinal = prodGlob.precio
        carro.append([prodGlob.id, prodGlob.nombre, prodGlob.imagen, prodGlob.precio, 1, prodGlob.precio,totalfinal])

    request.session["carro"] = carro
    
    return redirect(to="productos")

def comprar(request):
    carro= request.session.get("carro",[])
    total = 0
    for item in carro:
        total += item[5]
    venta = Venta()
    venta.cliente = request.user
    venta.total = total
    venta.fecha = datetime.now().date()
    venta.save()
    for item in carro:
        detalle = Detalle()
        detalle.producto = ProductosVarios.objects.get(id = item[0]) 
        detalle.precio = item[3]
        detalle.cantidad = item [4]
        detalle.venta = venta
        detalle.save()
    return redirect(to="carro")
    


def registro_view(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirige al formulario de inicio de sesión
    else:
        form = RegistroForm()
    
    return render(request, 'TCGPAGE/registro.html', {'form': form})