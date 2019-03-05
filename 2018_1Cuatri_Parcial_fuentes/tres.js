function mostrar()
{
	var precio;
	var descuento;
	var porcentaje;
	var precioDescuento;

	precio=prompt(" Ingrese el precio");
	porcentaje=prompt("Ingrese porcentaje");

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	precioDescuento=precio - descuento;

	document.getElementById('elPrecioFinal').value=precioDescuento;
}
