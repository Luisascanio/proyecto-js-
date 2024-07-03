let intro = alert("La busqueda del Alfajor legendario")
let intro2 = alert("Selecciona el numero que corresponda a la accion que quieres tomar")
let Sipnosis = alert("Sipnosis: tienes mucha hambre y todas las tiendas de tu pueblo estan cerradas pero escuchaste historias que existe una mazmorra en la que existe el alfajor legendario, tu objetivo es conseguirlo y saciar tu hambre")

function datos () {
let ingresaNombre = prompt("ingresa el nombre de tu personaje")


while (ingresaNombre === "" ) {
    alert("debes ingresar un nombre valido")
    datos();
}
    alert(`Acabas de entrar en las mazmorras del alfajor ${ingresaNombre}`);

} 
datos();


function primeraFase(){
    let primeraFaseOpciones = parseInt(prompt("el lugar se siente viejo y mohoso puedes observar:\n 1.Unas escaleras que descienden a un pozo, puedes ver una pequeña luz al fondo\n 2.un pasillo oscuro, puedes ver en la lejania ciertos objetos  "))
   
        switch(primeraFaseOpciones){
            case 1:
                let primeraFaseOpciones2;
                do {
                    primeraFaseOpciones2 = parseInt(prompt("Bajas por las escaleras despacio, sientes como la madera cruje al usarlas. Ves ciertas velas encendidas e imágenes de alfajores; parece que aquí adoraban al alfajor.\n 1. Rebuscar la sala\n 2. Devolverte"));
                    if (primeraFaseOpciones2 === 1 || primeraFaseOpciones2 === 2) {
                        break;
                    } else {
                        alert("Ingresa una opción válida");
                    }
                } while (true);
            
                switch (primeraFaseOpciones2){
                    case 1:
                    alert("buscas en la sala, encuentras el alfajor legendario estaba bien bueno. tu hambre ha sido saciada. eres feliz. FIN")
                    break;
                    case 2:
                    alert("te devuelves")
                    primeraFase()
                    break;
                    default:
                        alert("Ingresa una opcion valida")
                        primeraFase()
                }
                break;
            case 2:
                let primeraFaseOpciones3;
                do {
                    primeraFaseOpciones3 = parseInt(prompt("Has ido por el pasillo, se siente oscuro y mohoso. Ves algunas cajas y barriles viejos. ¿Qué vas a hacer?\n 1. Buscar algo útil en las cajas y barriles\n 2. Devolverte"));
                    if (primeraFaseOpciones3 === 1 || primeraFaseOpciones3 === 2) {
                        break;
                    } else {
                        alert("Ingresa una opción válida");
                    }
                } while (true);
                switch (primeraFaseOpciones3){
                    case 1:
                    alert("buscas algo util pero no encuentras el alfajor")
                    alert("vuelves por donde viniste")
                    primeraFase()
                
                    break;
                    case 2
                    :alert("te devuelves")
                    primeraFase()
                
                }
                break;
                default:
                    alert("seleciona una opcion correcta")
                    break;
        }
        
           
            
        }
    

    
    
    primeraFase()

