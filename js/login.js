
$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
    
});

function validar1(){
    var iCorreo, iContraseña;
    icorreo = document.getElementById("icorreo").value;
    icontraseña = document.getElementById("icontraseña").value;
    if(iContraseña==="" || iCorreo===""){
        alert("Uno o mas campos estan vacios");
        return false;
    }  
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!exp.test(iCorreo)){
            alert("El correo es invalido");
            return false;
        }else{
            return true;
        }
}
function validar2(){
    var rUsuario, rCorreo, rTelefono, rContraseña, rContraseña2,rDireccion,rTarjeta;
    rUsuario = document.getElementById("rUsuario").value;
    rCorreo = document.getElementById("rCorreo").value;
    rTelefono = document.getElementById("rTelefono").value;
    rContraseña = document.getElementById("rContraseña").value;
    rContraseña2 = document.getElementById("rContraseña2").value;
    rDireccion = document.getElementById("rDireccion").value;
    rTelefono = document.getElementById("rTelefono").value;

    
    if(rUsuario===""||rCorreo===""||rContraseña===""||rContraseña2===""){
        alert("Todos los campos son requeridos");
        return false;
    }
    if(rContraseña!==rContraseña2){
        alert("La contraseña no coincide");
        return false;
    }
    if(rContraseña.length<8){
        alert("La contraseñá es muy corta");
        return false;
    }
    if(rUsuario.length<4){
        alert("El Nombre de usuario es muy corto");
        return false;
    }
    if(rUsuario.length>20||rContraseña.length>20){
        alert("El usuario y la contraseña deben de tener 20 caracteres como maximo");
        return false;
    }
    if(rTelefono.length!==8){
        alert("El Telefono debe ser de 8 Caracteres");
        return false;
    }
    if(isNaN(rTelefono)){
        alert("El teléfono Ingresado no es un numero");
        return false;
    }
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!exp.test(rCorreo)){
            alert("El correo es invalido");
            return false;
        }else{
            return true;
        }	
    
    
}
