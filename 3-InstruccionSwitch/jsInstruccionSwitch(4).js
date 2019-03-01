function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	var mensaje;

	switch(mesDelAño)
	{		
		case"Febrero":
		mensaje = " Si tiene 28 dias ";
			break;
			
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
		mensaje = "Si tiene 30 dias ";
			break;

		default:
		mensaje= " Si tiene 31 dias ";
			break;


	}
	alert (mensaje);
	
	



}//FIN DE LA FUNCIÓN