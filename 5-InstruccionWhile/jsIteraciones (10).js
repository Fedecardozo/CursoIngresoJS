function mostrar()
{

	var contador;
	var respuesta;
	var numero;
	var positivo;
	var negativo;
	var pares;
	var diferencia;
	var contadorPositivo;
	var contadorNegativo;
	var contadorCeros;
	var contadorPares;
	var resto;
	var promedioPostivo;
	var promedioNegativo;

	contador=0;
	positivo=0;
	negativo=0;
	contadorPositivo=0;
	contadorNegativo=0;
	contadorCeros=0;
	contadorPares=0;
	respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese numeros");
		numero=parseInt(numero);
		respuesta=prompt("Quiere ingresar otro numero?");

		if(numero>0)
		{
			positivo=positivo+numero;
			contadorPositivo=contadorPositivo+1
		}
		else
		{
			if(numero<0)
			{
				negativo=negativo+numero;
				contadorNegativo=contadorNegativo+1;
			}
			else
			{
				contadorCeros=contadorCeros+1;
			}
		}
		resto=numero%2;

		if(resto==0)
		{
			contadorPares=contadorPares+1
		}
	}	
	promedioPostivo=positivo/contadorPositivo;
	promedioNegativo=negativo/contadorNegativo;
	diferencia=positivo+negativo;

	document.write("1)Suma de los negativos " + negativo +"<br>"+
			"2)Suma de los positivo " + positivo +"<br>"+
			"3)Cantidad de positivos " + contadorPositivo + "<br>"+
			"4)Cantidad de negativos " + contadorNegativo + "<br>"+
			"5)Cantidad de ceros " + contadorCeros +"<br>"+
			"6)Cantidad de numeros pares " + contadorPares + "<br>"+
			"7)promedioPostivo" + promedioPostivo + "<br>" +
			"8)Promedios de negativos" + promedioNegativo + "<br>" +
			"9)Diferencia entre positivo y negativo " + diferencia +"<br>");

	
	




}//FIN DE LA FUNCIÓN