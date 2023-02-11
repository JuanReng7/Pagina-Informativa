function validarPassword(){
    var pass = document.getElementById(`password`).value;
    var conf_pass = document.getElementById(`confirm_password`).value;

    if(pass === conf_pass){
        document.getElementById(`recibido`).innerHTML = "password:" + alert("Las contraseñas coinciden exitosamente")

    }else{ 
        document.getElementById(`recibido`).innerHTML = "password" + alert("La Contraseña no Coinciden (Por Favor vuelva a Intentarlo) ")
    }
}
document.getElementById(`enviar`).addEventListener(`click`, validarPassword);