

function validarUser() {
    let user = document.querySelector("#user");
    if (user.value.length >= 6) {
        user.classList.add("correct");
        user.classList.remove("incorrect");
        document.querySelector("#error-user").innerHTML = "&nbsp;";
    } else {
        user.classList.add("incorrect");
        user.classList.remove("correct");
        document.querySelector("#error-user")
            .innerHTML = "Error, ingrese 6 caracteres mínimo.";
    }
}

function validarPass() {
    let clave = document.querySelector("#clave");
    if (clave.value.length > 5 && clave.value.length < 13) {
        clave.classList.add("correct");
        clave.classList.remove("incorrect");
        document.querySelector("#error-clave").innerHTML = "&nbsp;";
    } else {
        clave.classList.add("incorrect");
        clave.classList.remove("correct");
        document.querySelector("#error-clave")
            .innerHTML = "Error, ingrese entre 6 y 12 caracteres.";
    }
}

function validarFormulario() {
    let inputs = document.querySelectorAll("input");
    let correctos = true;
    inputs.forEach(element => {
        if (element.classList.contains("incorrect")) {
            correctos = false
        }
    });
    if (correctos) {
        document.querySelector("form").submit();
        
    } else {
        document.querySelector("#error-form")
            .innerHTML = "Error, revise los campos.";
    }
}

function validarFormularioIndex() {
    let inputs = document.querySelectorAll("input");
    let correctos = true;
    inputs.forEach(element => {
        if (element.classList.contains("incorrect")) {
            correctos = false
        }
    });
    if (correctos) {
        document.querySelector("form").submit();
        
    } else {
        document.querySelector("#error-form")
            .innerHTML = "Error, los campos no pueden estar vacios.";
    }
}






let cartasPoke = [
    {
        "nombre":"Plancha Recubrimiento AZM150 Zinc Acanalada 0.35 mm 85.1x366 cm Gris",
        "precio":"12490",
        "imagen":"https://media.falabella.com/sodimacCL/155780_001/w=1500,h=1500,fit=pad"

    },
    {
        "nombre":"Pino Dimensionado Verde 2x3 3,2 m",
        "precio":"3090",
        "imagen":"https://media.falabella.com/sodimacCL/376256_01/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Tornillo Hexagonal Punta Broca 12 x 1-1/2 100 Unidades",
        "precio":"9500",
        "imagen":"https://media.falabella.com/falabellaCL/139866278_01/w=1500,h=1500,fit=pad"

    },
    {
        "nombre":"Tablero OSB 9.5 mm 122x244 cm",
        "precio":"15990",
        "imagen":"https://media.falabella.com/sodimacCL/6302254_001/w=1500,h=1500,fit=pad"
    }


]

function cargarPOKE(){
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(dailyIndicators) {
        let dolar = parseFloat(dailyIndicators.dolar.valor);
        let productos = document.querySelector("#productosPOKE");
        for(let item of cartasPoke){
            let producto = document.createElement("div");
            producto.classList.add("producto");
            let imagen = document.createElement("div");
            imagen.classList.add("imagen");
            imagen.style.backgroundImage = 'url('+ item.imagen +')';
            producto.appendChild(imagen);
            let nombre = document.createElement("div");
            nombre.classList.add("nombre");
            nombre.innerHTML = item.nombre;
            producto.appendChild(nombre);
            let precio = document.createElement("div");
            precio.classList.add("precio");
            precio.innerHTML = "$"+item.precio + " (USD "+ (item.precio/dolar).toFixed(1) +")";
            producto.appendChild(precio);
            productos.appendChild(producto);
        }
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}


let cartasMYL = [
 
    {
        "nombre":"Taladro Percutor Eléctrico 13 mm 900 W 220 V",
        "precio":"42190",
        "imagen":"https://media.falabella.com/sodimacCL/8738599_001/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Sierra circular eléctrica 7 1/4 1800W",
        "precio":"64790",
        "imagen":"https://media.falabella.com/sodimacCL/8739404_001/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Esmeril angular eléctrico 4,5 820W + 20 discos",
        "precio":"27990",
        "imagen":"https://media.falabella.com/sodimacCL/312763X_001/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Soldadora arco manual 160A nanoweld",
        "precio":"169990",
        "imagen":"https://media.falabella.com/sodimacCL/6852521_01/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Electrosierra Motosierra inalámbrica 6P +Pantalla+ 2 baterías",
        "precio":"46990",
        "imagen":"https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/132651614_01/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Llave de Impacto 1/2 Con 2 Baterías Y Accesorios",
        "precio":"56990",
        "imagen":"https://media.falabella.com/falabellaCL/122294030_01/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Sierra ingleteadora eléctrica 10P 2000W",
        "precio":"275990",
        "imagen":"https://media.falabella.com/sodimacCL/2749130_001/w=1500,h=1500,fit=pad"
    },
    {
        "nombre":"Lijadora Roto Orbital Lernen 350 W - Con Lijas De Repuesto",
        "precio":"56990",
        "imagen":"https://media.falabella.com/falabellaCL/126981582_041/w=1500,h=1500,fit=pad"
    },
]

function cargarMYL(){
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(dailyIndicators) {
        let dolar = parseFloat(dailyIndicators.dolar.valor);
        let productos = document.querySelector("#productosMYL");
        for(let item of cartasMYL){
            let producto = document.createElement("div");
            producto.classList.add("producto");
            let imagen = document.createElement("div");
            imagen.classList.add("imagen");
            imagen.style.backgroundImage = 'url('+ item.imagen +')';
            producto.appendChild(imagen);
            let nombre = document.createElement("div");
            nombre.classList.add("nombre");
            nombre.innerHTML = item.nombre;
            producto.appendChild(nombre);
            let precio = document.createElement("div");
            precio.classList.add("precio");
            precio.innerHTML = "$"+item.precio + " (USD "+ (item.precio/dolar).toFixed(1) +")";
            producto.appendChild(precio);
            productos.appendChild(producto);
        }
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}


let items = [
    {
        "nombre":"MTG BUNDLE: Modern Horizons 3 - Ingles",
        "precio":99990,
        "imagen":"https://i.postimg.cc/1tRWD6T3/magic-modrn-horizons.png"
    },
    {
        "nombre":"MTG Mazo Inicial Commander - Triunfo de las Fichas",
        "precio":27990,
        "imagen":"https://www.entrejuegos.cl/13905-home_default/mtg-mazo-inicial-de-commander-encarnacion-del-caos-ingles.jpg"
    }
    
]

function cargarMTG(){
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(dailyIndicators) {
        let dolar = parseFloat(dailyIndicators.dolar.valor);
        let productos = document.querySelector("#productosMTG");
        for(let item of items){
            let producto = document.createElement("div");
            producto.classList.add("producto");

            let imagen = document.createElement("div");
            imagen.classList.add("imagen");
            imagen.style.backgroundImage = 'url('+ item.imagen +')';
            producto.appendChild(imagen);

            let nombre = document.createElement("div");
            nombre.classList.add("nombre");
            nombre.innerHTML = item.nombre;
            producto.appendChild(nombre);

            let precio = document.createElement("div");
            precio.classList.add("precio");
            precio.innerHTML = "$"+item.precio + " (USD "+ (item.precio/dolar).toFixed(1) +")";
            producto.appendChild(precio);

            productos.appendChild(producto);
        }
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}



let articulosYugi = [
    {
        "nombre":"Mazo estructura Yugi Muto",
        "precio":14990,
        "imagen":"https://i.postimg.cc/d3L4xFJM/mazo-estructura-yugi.webp"
    },
    {
        "nombre":"Caja sobres x24 Yu-Gi-Oh",
        "precio":34990,
        "imagen":"https://i.postimg.cc/DwbRzrkV/caja-sobre-yugi.webp"
    },
    {
        "nombre":"Mazo Dragon blanco de ojos azules",
        "precio":99990,
        "imagen":"https://i.postimg.cc/63HMcqJL/mazo-dragon-blanco.webp"
    },
    {
        "nombre":"Sobre Yu-Gi-Oh",
        "precio":3990,
        "imagen":"https://i.postimg.cc/3RwBkh4y/sobre-yu-gi-oh.webp"
    }
    
]



function cargarYugi(){
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(dailyIndicators) {
        let dolar = parseFloat(dailyIndicators.dolar.valor);
        let productos = document.querySelector("#cartasYugi");
        for(let item of articulosYugi){
            let producto = document.createElement("div");
            producto.classList.add("producto");

            let imagen = document.createElement("div");
            imagen.classList.add("imagen");
            imagen.style.backgroundImage = 'url('+ item.imagen +')';
            producto.appendChild(imagen);

            let nombre = document.createElement("div");
            nombre.classList.add("nombre");
            nombre.innerHTML = item.nombre;
            producto.appendChild(nombre);

            let precio = document.createElement("div");
            precio.classList.add("precio");
            precio.innerHTML = "$"+item.precio + " (USD "+ (item.precio/dolar).toFixed(1) +")";
            producto.appendChild(precio);

            productos.appendChild(producto);
        }
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}