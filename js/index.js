let productos = [
    {
        nombre: 'cerveza',
        precio: 1000
    },
    {
        nombre: 'fernet',
        precio: 2000
    },
    {
        nombre: 'gin',
        precio: 3000
    },
    {
        nombre: 'ron',
        precio: 2500
    },
    {
        nombre: 'whisky',
        precio: 5000
    }
];

let totalPedido = 0;

do {

    function calcularTotal() {
        const nombreProducto = prompt('Los productos a seleccionar son: cerveza, whisky, fernet, gin, ron. \n Ingrese el nombre del producto que quiere adquirir:');
        const cantidad = parseInt(prompt('Ingrese la cantidad que desea:'));

        const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

    }
}while();