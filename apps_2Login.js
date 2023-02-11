const nombre = document.getElementById("nombre")
const correo = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const input = document.getElementById("input")

form.addEventListener("submit", e=>{
    e.preventDefault() 
    let warnings = ""
    let entrar = false
    

    if(nombre.value.length <3){
        warnings += `El nombre no es valido <br><br>`
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

