function pagar(){
alert("el total es 600")
let precio = 600
let consulta = prompt("en cuantas cuotas abona? 1,3 o 6")

if(consulta){

    switch(consulta){
        case "1":
            alert("esta bien son 600")
            break
        case "3":
            alert("cada cuota queda en 200") 
            break
        case "6":
            alert("cada cuota queda en 100")   

    }
    alert("muchas gracias")
}

}

pagar()
