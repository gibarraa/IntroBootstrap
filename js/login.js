alert("Hola desde ECMAScript 6");

function validarLogin() {
    // Obtén los valores de los inputs
    let usuario = document.getElementById('txtUsuario').value;
    let password = document.getElementById('txtContrasena').value; //se puede usar class list para obtener la lista de clases que tiene un elemento

    if (password === document.getElementById('txtContrasena').value && usuario === document.getElementById('txtUsuario').value) {
        alert("Bienvenido al sistema " + usuario + "!");
        window.location.href = "../html/principal.html"; //redirecciona a la página index.html
    } else {
        alert("!Hola usuario desconocido!");
    }

    // Muestra el nombre del usuario en el <p> con id 'mostrarUsuario'
    document.getElementById('mostrarUsuario').innerText = "Bienvenido, " + usuario + "!";
}