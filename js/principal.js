//alert("Prueba js principal")
let moduloProductos = document.getElementById('moduloProductos');
function cargarModuloProducto() {
    let contenedorPrincipal = document.getElementById('panelPrincipal');

    //Petición FETCH
    fetch("../html/moduloProductos.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(modulo){
            console.log(modulo);
            contenedorPrincipal.innerHTML = modulo;
            import ('../js/productos.js').then(
                function(controller){
                    moduloProductos = controller
                }
            )
        }
    )

}