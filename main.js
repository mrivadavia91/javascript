
const Producto = function(nombre,precio,stock){
    this.nombre= nombre,
    this.precio = precio
    this. stock = stock
}
                   
let producto1= new Producto ("anillo", 100, 20)
let producto2= new Producto ("arito", 150, 26)
let producto3= new Producto ("pulsera", 500, 45)
let producto4= new Producto ("difusor", 1000, 23)

let lista = [producto1,producto2,producto3,producto4]



alert("ingrese la opcion del producto a comprar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-anillo $100 2-arito $150 3-pulsera $500 4-difusor $1000"))
let seleccionarCantidad
let total = 0
const cantidad = (cant, precio) =>{
    return cant * precio
}

let productos = []


while(seleccionarProductos !=0){
    switch (seleccionarProductos){
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es anillo, ingresa cantidad"))
            productos.push("anillo  " + seleccionarCantidad)
            total += cantidad(seleccionarCantidad,100)
        break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es arito, ingresa cantidad"))
            productos.push("arito  " + seleccionarCantidad)
            total += cantidad(seleccionarCantidad,150)
        break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es pulsera, ingresa cantidad"))
            productos.push("pulsera  " + seleccionarCantidad)
            total += cantidad(seleccionarCantidad,500)
        break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es difusor, ingresa cantidad"))
            productos.push("difusor  " + seleccionarCantidad)
            total += cantidad(seleccionarCantidad,1000)
        break;


    }
    seleccionarProductos = Number(prompt("1-anillo $100 2-arito $150 3-pulsera $500 4-difusor $1000"))
}




alert("el total de la compra es  "  + total)

console.log(productos)

function encontrar (){
    
    let encontrado = lista.filter((x)=>x.seleccionarCantidad)

    if(encontrado.length >=2){
        console.log(encontrado)}
    else{
        console.log(encontrado + "compro por menor")
    }

 
}
