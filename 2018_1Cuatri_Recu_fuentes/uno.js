
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese ancho de un rectangulo: ");
	largo = prompt("Ingrese largo de un rectangulo: ");
	ancho = parseInt(ancho);
	largo = parseInt(largo);
	perimetro = ancho + largo;

	alert("El perimetro es: " + perimetro);

}
