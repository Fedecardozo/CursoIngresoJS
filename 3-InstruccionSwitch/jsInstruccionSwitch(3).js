function mostrar()
{

var mesDelAño = document.getElementById('mes').value;
var mensaje;	
	switch(mesDelAño)
	{
		case "Febrero":
		mensaje = " Este mes no tiene mas de 29 dias";
			break;
		default:
		mensaje = " Este mes tiene 30 o mas dias ";
	}
	alert (mensaje);
	
	


}//FIN DE LA FUNCIÓN