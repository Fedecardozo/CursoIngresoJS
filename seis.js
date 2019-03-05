function mostrar()
{
	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	switch(hora)
	{
		case"6":
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			mensaje="es de mañana";
				break;

		case"12":
		case"13":
		case"14":
		case"15":
		case"16":
		case"17":
		case"18":
		case"19":
			mensaje="es de tarde";
				break;

		case"20":
		case"21":
		case"22":
		case"23":
		case"24":
		case"0":
		case"1":
		case"2":
		case"3":
		case"4":
		case"5":

				if(hora<24)
				{
					mensaje="es de noche, a dormir";
				}
				else
				{
					mensaje="es de noche";
				}
				if(hora<0 || hora>24)
				{
					mensaje="la hora ingresada es incorrecta";	
				}
			
		
	}
	alert(mensaje);
	/*if(hora<0 || hora>24)
	{
		mensaje="la hora ingresada no es valida";
	}	
	else
	{
		if(hora>5 && hora<12)
		{
			mensaje="es de mañana";
		}
		else
		{	
			if(hora>11 && hora<20)
			{
				mensaje="es de tarde";
			}
			else
			{
				hora=noche;
				mensaje="a dormir";
			}
		}
	}*/



}
