function mostrar()
{
	var numero;
	var i;

	numero=prompt("Ingrese numero: ");
	numero = parseInt(numero);

	for(i=numero-1; i>1; i--)
	{
		if(numero%i == 0)
		{
			break;	
		}

	}
	if(i == 1)
	{
		document.write("Es primo: " + i);
	}
	else
	{
		document.write("No es primo: " + i);
	}



}//FIN DE LA FUNCIÓN