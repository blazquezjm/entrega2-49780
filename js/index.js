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

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalElemento = document.getElementById('total');

    // Limpiar la lista antes de actualizar
    listaCarrito.innerHTML = '';

    // Actualizar la lista del carrito
    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} - Cantidad: ${item.cantidad} - Total: $${item.totalParcial.toFixed(2)}`;
        listaCarrito.appendChild(listItem);
    });

    // Actualizar el total del pedido
    totalElemento.textContent = `Total del pedido: $${totalPedido.toFixed(2)}`;
}
