let carrito = [];
let totalPedido = 0;

function agregarAlCarrito(nombre, precio, inputId) {
    const cantidadInput = document.getElementById(inputId);
    const cantidad = parseInt(cantidadInput.value);

    if (!isNaN(cantidad) && cantidad > 0) {
        const totalParcial = precio * cantidad;
        
        // Agregar al carrito
        carrito.push({ nombre, cantidad, totalParcial });

        // Actualizar el total del pedido
        totalPedido += totalParcial;
        actualizarCarrito();

        // Limpiar el campo de cantidad
        cantidadInput.value = '';
    } else {
        alert('Por favor, ingrese una cantidad válida mayor a cero.');
    }
}
