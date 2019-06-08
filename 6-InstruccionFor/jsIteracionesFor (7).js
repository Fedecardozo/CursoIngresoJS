function mostrar()
{
	var numero;
	var i;

	numero=prompt("Ingrese numero ");
	numero=parseInt(numero);

	for(i=1; i<=numero; i++)
	{
		if(numero%i==0)
		{
			document.write(i + "<br>");
		}

	}

	/*for(i=numero-1; i>=1 ; i--)
	{ 

		if(numero%i==0)
		{
			document.write(i);
		}	

	}*/
	
	

}//FIN DE LA FUNCIÓN