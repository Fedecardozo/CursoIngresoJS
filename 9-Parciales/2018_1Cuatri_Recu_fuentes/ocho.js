/*Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene*/


function mostrar()
{
	var pais;
	var territorio;
	var respuesta;
	var contadorPaisesImpar;
	var contadorPaisesMenor;
	var contadorPaisesIgual;
	var resto;
	var contador;
	var primerPais;

	respuesta="si";
	territorio=0;
	contadorPaisesImpar=0;
	contadorPaisesMenor=0;
	contadorPaisesIgual=0;
	contador=0;

	while(respuesta!="no")
	{
		pais=prompt("Ingrese pais ");
		territorio=prompt("Ingrese territorio");
		territorio=parseInt(territorio);
		respuesta=prompt("Quiere ingresar mas paises? ");

		resto= territorio%2;

		if(resto==1)
		{
			contadorPaisesImpar=contadorPaisesImpar+1;
		}
		else
		{
			if(territorio<100)
			{
				contadorPaisesMenor=contadorPaisesMenor+1;
			}
			if(territorio==100)
			{
				contadorPaisesIgual=contadorPaisesIgual+1;
			}
		}

		contador=contador+1

		if(contador==1)
		{
			pais=primerPais;
		}
		else
		{
			if(primerPais && territorio>100)
		}		
	}




}
