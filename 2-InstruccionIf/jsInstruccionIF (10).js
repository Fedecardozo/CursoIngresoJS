function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var mensaje;
	numeroRandom=Math.floor((Math.random() *10)+ 1);
	//console.log(numeroRandom);
	numeroRandom = parseInt(numeroRandom);


	if(numeroRandom>3)
	{
		mensaje = "Aprobo " + numeroRandom;
	}
	else
	{
		mensaje = " Vamos, para la proxima se puede " + numeroRandom;
	}	
	if(numeroRandom==9 || numeroRandom==10)
	{
		mensaje = " Excelente " + numeroRandom;
	}
	alert(mensaje);
	console.log(numeroRandom)
}//FIN DE LA FUNCIÓN