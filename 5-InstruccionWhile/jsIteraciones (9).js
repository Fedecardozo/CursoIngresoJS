function mostrar()
{

	var contador;
	var respuesta;
	var numero;
	var numeroMaximo;
	var numeroMinimo;

	respuesta='si';
	contador=0;

	while(respuesta!='no')
	{
		numero=prompt("Ingrese numero ");
		numero=parseInt(numero);
		respuesta=prompt("Quiere ingresar otro numero?");

		if(contador==0)
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
		}
		else
		{
			if(numero<numeroMinimo)
			{
				numeroMinimo=numero;
			}
			if(numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}
		}	
		
		contador=contador+1;
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById("minimo").value=numeroMinimo;




}//FIN DE LA FUNCIÓN