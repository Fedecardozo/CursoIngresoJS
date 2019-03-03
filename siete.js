/*Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólid*/

function mostrar()
{
	var kilómetros;
	var combustible;
	var respuesta;
	var contador;
	var promedioVelocidades;
	var velocidadBaja;
	var velocidadBajaCombustible;
	var velocidadAlta;
	var contadorCombustible;

	contador=0;
	respuesta="si";
	contadorVelocidades=0;
	contadorCombustible=0;

	while(respuesta!="no")
	{
		kilómetros=prompt("Ingrese kilómetros");
		kilómetros=parseInt(kilómetros);
		
		while(kilómetros<0 || kilómetros>250)
		{
			kilómetros=prompt(" Error, ingrese kilómetros no mayor a 250 ");
			kilómetros=parseInt(kilómetros);
		}
		contadorVelocidades=contadorVelocidades+kilómetros;
		combustible=prompt("Ingrese tipo combustible");

		while(combustible!="s" && combustible!="l")
		{
			combustible=prompt("Error, ingrese solido o liquido ");
		}

		if(contador==0)
		{
			velocidadBaja=kilómetros;
			velocidadBajaCombustible=combustible;
		}
		else
		{
			if(kilómetros<velocidadBaja)
			{
				velocidadBaja=kilómetros;
				velocidadBajaCombustible=combustible;
			}

		
			if(kilómetros>velocidadAlta && combustible=="s")
			{
				velocidadAlta=kilómetros;
			}
		}
		if(combustible=="l" && kilómetros>100)
			{
				contadorCombustible=contadorCombustible+1;
			}

		respuesta=prompt("Quiere ingresar otra velocidad?");
		contador=contador+1;
	}
	promedioVelocidades=contadorVelocidades/contador;
	//alert("El promedio de las velocidades es: " + promedioVelocidades +
	 //", la velocidad mas baja es " + velocidadBaja + " y su tipo de combustible es " + )
	document.write("1-El promedio de las velocidades totales." + promedioVelocidades +"<br>"+
	"2-La velocidad más baja" + velocidadBaja +"y el tipo de combustible de ese vehículo es " + velocidadBajaCombustible + "<br>" +
	"3-La cantidad de combustibles líquidos que su velocidad supere los 100 kilómetros." + contadorCombustible + "<br>" +
	"4-la velocidad más alta de los de combustible sólido" + velocidadAlta);
}
