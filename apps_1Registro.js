const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("email")
const password = document.getElementById("password")
const confirmar_password = document.getElementById("confirmar_password")
const telefono = document.getElementById("telefono")
const FechadeNacimiento = document.getElementById("FechadeNacimiento")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const input = document.getElementById("input")

form.addEventListener("submit", e=>{
    e.preventDefault() 
    let warnings = ""
    let entrar = false
    
    

    if(nombre.value.length <3){
        alert =("El Nombre es demasido corto")
        entrar = true
    }

    
    if(password.value.length < 8){
        alert("La contraseña es demasiado corta")
        entrar = true
    }

    if(entrar)
     parrafo.innerHTML = warnings

     window.location = "3Pagina-Principal.html"
})

