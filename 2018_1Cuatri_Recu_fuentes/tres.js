function mostrar()
{
	var precio;
	var descuento;
	var precioDescuento;

	precio = prompt("Ingrese precio ");
	precio = parseInt(precio);
	descuento = prompt("Ingrese descuento");
	descuento = parseInt(descuento);

	precioDescuento = precio * descuento;

	elPrecioFinal.value = precioDescuento/100;

}
