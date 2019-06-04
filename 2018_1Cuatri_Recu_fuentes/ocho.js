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
	var letra;
	var numero;
	var promedio;
	var letraMin;
	var letraMax;
	var numeroMax;
	var numeroMin;
	var respuesta="si";
	var contadorPar=0;
	var contadorImpar=0;
	var contadorCeros=0;
	var contador=0;
	var contadorPosi=0;
	var suma=0;
	var sumaNega=0;


	while(respuesta!="no")
	{
		letra = prompt("Ingrese letra ");
		numero = prompt("Ingrese numero ");
		numero = parseInt(numero);

		while(numero<-100 || numero>100)
		{
			numero = prompt("Error, ingrese nuevamente");
			numero = parseInt(numero);
		}
		if(numero%2 == 0)
		{
			contadorPar++;
		}
		if(numero%2 != 0)
		{
			contadorImpar++;
		}
		if(numero == 0)
		{
			contadorCeros++;
		}
		if(numero>0)
		{
			suma = suma + numero;
			contadorPosi++; 
 		} 
 		if(numero<0)
 		{
 			sumaNega= sumaNega + numero;
 		}
 		if(contador==0)
 		{
 			numeroMin=numero;
 			numeroMax=numero;
 			letraMin=letra;
 			letraMax=letra;
 		}
 		else
 		{
 			if(numero<numeroMin)
 			{
 				numeroMin = numero;
 				letraMin = letra;
 			}
 			if(numero>numeroMax)
 			{
 				numeroMax = numero;
 				letraMax = letra;
 			}
 		}

		contador++;
		respuesta=prompt("Quiere seguir?");
		promedio=suma/contadorPosi;
	}

	document.write("1- contador par " + contadorPar + "<br>" + 
		"2- contador impar " + contadorImpar + "<br>" + 
		"3- contador ceros " + contadorCeros + "<br>" + 
		"4- promedio " + promedio + "<br>" + 
		"5- suma negativo " + sumaNega + "<br>" +
		"6- numero maximo " + numeroMax + " letra: " + letraMax + "<br>" +
		"7- numero minimo " + numeroMin + " letra : " + letraMin );

}












/*{
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

}*/
