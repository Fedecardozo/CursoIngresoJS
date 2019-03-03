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
	var contadorPaisesMayor;
	var resto;
	var contador;
	var primerPaisMayor;
	var paisMenor;
	var sumaKilometros;
	var promedioSuperficie;
	var territorioMinimo;

	respuesta="si";
	territorio=0;
	contadorPaisesImpar=0;
	contadorPaisesMenor=0;
	contadorPaisesIgual=0;
	contadorPaisesMayor=0;
	contador=0;
	sumaKilometros=0;

	while(respuesta!="no")
	{
		pais=prompt("Ingrese pais ");
		territorio=prompt("Ingrese superficie");
		territorio=parseInt(territorio);
		respuesta=prompt("Quiere ingresar mas paises? ");

		while(territorio<0 || territorio>1000)
		{
			territorio=prompt("Error, Ingrese superficie valida entre 0 y 1000");
			territorio=parseInt(territorio);
		}

		sumaKilometros=sumaKilometros + territorio;

		resto= territorio%2;
	

		if(resto!=0)
		{
			contadorPaisesImpar=contadorPaisesImpar+1;
		}
		if(territorio<100)
		{
			contadorPaisesMenor=contadorPaisesMenor+1;
		}
		else
		{
			if(territorio==100)
			{
				contadorPaisesIgual=contadorPaisesIgual+1;
			}
			if(territorio>100 && contadorPaisesMayor==0)
			{
				contadorPaisesMayor=contadorPaisesMayor+1;
				primerPaisMayor=pais;
			}
		}
		if(contador==0)
		{
			paisMenor=pais;
			territorioMinimo=territorio;
		}
		else
		{
			if(territorio<territorioMinimo)
			{
				territorioMinimo=territorio;
				paisMenor=pais;
			}
		}
		contador=contador+1;		
	}

	promedioSuperficie=sumaKilometros/contador;

	document.write("1-La cantidad de países con superficie impar.= " + contadorPaisesImpar + "<br>" +
	"2-La cantidad de países con superficie menor a 100= " + contadorPaisesMenor + "<br>" +
	"3-La cantidad de países con superficie igual a 100= " + contadorPaisesIgual + "<br>" +
	"4-El nombre del primer país que superó los 100 de superficie= " + primerPaisMayor + "<br>" +
	"5-El promedio de kilómetros ingresados.= " + promedioSuperficie + "<br>" +
	"6-El nombre del que menos territorio tiene= " + paisMenor + " y su territorio es: " + territorioMinimo);

}
