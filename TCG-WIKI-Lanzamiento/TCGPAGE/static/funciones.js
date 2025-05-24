

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
        "nombre":"V-Batle deck Victini",
        "precio":"24990",
        "imagen":"https://i.postimg.cc/jqF8JDhR/mazo-pokemon.webp"

    },
    {
        "nombre":"V-Batle deck Gardevoir",
        "precio":"24990",
        "imagen":"https://i.postimg.cc/6qgYsPQ8/mazo-gardevoir.webp"
    },
    {
        "nombre":"V-Batle deck Victini & Gardevoir",
        "precio":"61990",
        "imagen":"https://i.postimg.cc/Nj1bVpv0/pack-pokemon-victini-y-gardevoir.webp"

    },
    {
        "nombre":"Caja Pokemon 151 Ultra-Premium Collection",
        "precio":"149990",
        "imagen":"https://i.postimg.cc/VsDxZsBh/caja-pokemon-151-1-11zon.webp"
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
        "nombre":"Caja 24 Sobres Mitos Y Leyendas Furia",
        "precio":"30000",
        "imagen":"https://i.postimg.cc/Yq0J5cdC/caja-24-sobres-myl-f.webp"
    },
    {
        "nombre":"Caja Sobre Mitos Y Leyendas Primer Bloque",
        "precio":"35000",
        "imagen":"https://i.postimg.cc/c4zVZDzM/caja-sobre-primer-bloque.webp"
    },
    {
        "nombre":"Sobre Mitos Y Leyendas Furia",
        "precio":"2000",
        "imagen":"https://i.postimg.cc/KYxQyBmD/sobre-11-cartas-myl.webp"
    },
    {
        "nombre":"Sobre Mitos Y Leyendas Primer Bloque",
        "precio":"2000",
        "imagen":"https://th.bing.com/th?id=OIF.jKUOU3UHIQRxcV%2bAS8xY%2fA&rs=1&pid=ImgDetMain"
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