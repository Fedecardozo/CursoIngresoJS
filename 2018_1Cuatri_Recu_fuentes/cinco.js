function mostrar()
{
	var dia;
	var mensaje;

	dia = prompt("Ingrese dia: ");

	switch(dia){ 
	
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		mensaje = "A trabajar";
		break;

		case "sabado":
		case "domingo":
		mensaje = "Buen finde";
		break;

		default:
		mensaje = ("No es un dia valido");
		break;
	}

	alert(mensaje);
}
