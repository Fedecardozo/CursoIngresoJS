function mostrar()
{
	var numeroIngresado;
	var numeroRecorrido;
	var numeroAnterior;

	numeroIngresado=prompt(" Ingrese un numero ");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroAnterior--)
	{
		for(numeroAnterior=numeroRecorrido-1;numeroAnterior>1;numeroAnterior--)
	{
		if(numeroRecorrido%numeroAnterior==0)
		{
			break;
		}
			console.log(numeroAnterior);
	}
		if(numeroAnterior==1)
		{
			console.log(" Es primo " + numeroRecorrido);
		}
			console.log(numeroRecorrido);
	}
	




}//FIN DE LA FUNCIÓN