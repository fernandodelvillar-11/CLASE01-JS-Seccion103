// let boton = document.getElementById("btnIngresar");

// boton.addEventListener("click", function(){
//     console.log("Hiciste un click");
// });




//Capturar datos por consola con inputs

// let boton = document.getElementById("btnIngresar");
// boton.addEventListener("click", function(){
//     let usuario = document.getElementById("usuario").value;
//     let clave = document.getElementById("clave").value;

//     console.log("Usuario ingresado: " + usuario);
//     console.log("Password ingresada: " + clave);
// });


//Validación
let boton = document.getElementById("btnIngresar");
boton.addEventListener("click", function(){
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");


    let usuariocorrecto = "admin";
    let clavecorrecta = "1234";


    if(usuario === "" || clavecorrecta === ""){
        mensaje.textContent = "Debes completar todos los campos";
        mensaje.style.color = "orange"

    }else if(usuario === usuariocorrecto && clave === clavecorrecta){
        mensaje.textContent = "Acceso permitido, se te redireccionara en 3 segundos";
        mensaje.style.color = "green"
        setTimeout(function(){
            window.location.href = "index.html"
        },3000);

    }else{
        mensaje.textContent = "Usuario o contraseña incorrecta, chupalo";
        mensaje.style.color = "red"
    }

});