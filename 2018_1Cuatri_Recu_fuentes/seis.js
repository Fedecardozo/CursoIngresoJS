/*6-Se ingresa una hora. 
Si está entre las 6 y las 11 mostrar:"es de mañana", 
si es desde las 12 a las 19: "es de tarde", 
de lo contrario informar que es de noche. 
Informar si la hora no es válida. 
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".*/

function mostrar()
{
	var hora;
	var mensaje;

	hora = laHora.value;

	if(hora>5 && hora<12)
	{
		mensaje = "Es de mañana";
	}
	else
	{
		switch(hora)
		{
			case "20":
			case "21":
			case "22":
			case "23":
			mensaje = "a dormir";
			break;
		
			default:
		
			mensaje = "es de noche";
			break;
		}
		if(hora>11 && hora<20)
		{
			mensaje = "Es de tarde";
		}
		
	}

	alert(mensaje);

	
}
