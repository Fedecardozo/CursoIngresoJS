function mostrar()
{
	var marca;
	var respuesta;
	var temperatura;
	var peso;
	var contador;
	var contadorTemperatura;
	var pesoPesado;
	var marcaPesado;
	var contadorCero;
	var totalPeso;
	var promedio;
	var pesoMinimo;

	respuesta="si";
	peso=0;
	temperatura=0;
	contador=0;
	contadorTemperatura=0;
	contadorCero=0;
	totalPeso=0;
	pesoMinimo=0;
	pesoPesado=0;

	while(respuesta!="no")
	{
		marca=prompt("Ingrese marca");

		peso=prompt("Ingrese peso");
		peso=parseInt(peso);

		while(peso<1 || peso>100)
		{
			peso=prompt("Error, Ingrese peso valido entre 1 y 100");
			peso=parseInt(peso);
		}
		contador=contador+1;
		totalPeso=totalPeso+peso;

		temperatura=prompt("Ingrese temperatura");
		temperatura=parseInt(temperatura);

		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("temperatura invalida, entre -30 y 30");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2==0)
		{
			contadorTemperatura=contadorTemperatura+1;
		}
		if(temperatura<0)
		{
			contadorCero=contadorCero+1;
		}

		if(contador==0)
		{
			pesoPesado=peso;
			pesoMinimo=peso;
			marcaPesado=marca;
		}
		else
		{
			if(peso>pesoPesado)
			{
				pesoPesado=peso;
				marcaPesado=marca;
			}
			else
			{
				pesoMinimo=peso;
			}
		}
	
		promedio=totalPeso/contador;
		respuesta=prompt(" Desea ingresar mas cosas?");

	}

	document.write("La cantidad de temperatura pares es: " + contadorTemperatura + "<br>" +
		" La marca del producto mas pesado es: " + marcaPesado + "<br>" + 
		" Total producto menor a 0: " + contadorCero + "<br>" + 
		" Promedio peso de todos los productos: " + promedio + "<br>" + 
		" Peso maximo: " + pesoPesado + "<br>" + 
		" Peso minimo: " + pesoMinimo);


}
