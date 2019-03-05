function mostrar()
{
	var numero;
	var letra;
	var respuesta;
	var contadorPar;
	var contadorImpar;
	var contadorCero;
	var sumaPositivo;
	var sumaNegativo;
	var contador;
	var promedio;
	var contadorPositivo;

	contadorPar=0;
	contadorImpar=0;
	contadorCero=0;
	contadorPositivo=0;
	sumaNegativo=0;
	sumaPositivo=0;
	contador=0;
	respuesta="si";

	while(respuesta!="no")
	{		
		letra=prompt("ingrese letra");
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(numero<-100 || numero>100)
		{
			numero=prompt("Error, ingrese numero entre -100 y 100");
			numero=parseInt(numero);
		}
		if(numero==0)
		{
			contadorCero=contadorCero+1
		}
		else
		{
			if(numero%2 == 0)
			{
				contadorPar=contadorPar+1;
			}
			else
			{
				contadorImpar=contadorImpar+1;
			}


			if(numero>0)
			{
				sumaPositivo=sumaPositivo + numero;
				contadorPositivo=contadorPositivo+1;
			}
			else
			{
				sumaNegativo=sumaNegativo + numero;
			}

		}

		if(contador==0)
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
			letraMaximo=letra;
			letraMinimo=letra;
		}
		else
		{
			if(numero>numeroMaximo)
			{
				numeroMaximo=numero;
				letraMaximo=letra;
			}
			else
			{
				numeroMinimo=numero;
				letraMinimo=letra;
			}
		}

		respuesta=prompt("Desea continuar?");
		contador=contador+1;
	}

	promedio=sumaPositivo/contadorPositivo;

	document.write("a) La cantidad de números pares. " + contadorPar + "<br>" +
	"b) La cantidad de números impares. " + contadorImpar + "<br>" + 
	"c) La cantidad de ceros. " + contadorCero + "<br>" +
	"d) El promedio de todos los números positivos ingresados. " + promedio + "<br>" +
	"e) La suma de todos los números negativos. " + sumaNegativo + "<br>" +
	"f) El número y la letra del máximo y " + numeroMaximo + " " + letraMaximo + "<br>" +
	"g) la letra y el mínimo. " + letraMinimo + " " + numeroMinimo );

}
