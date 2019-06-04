/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
	var notas;
	var sexo;
	var suma=0;
	var contador=0;
	var notasBajas=0;
	var sexoNota;
	var sexoVaron=0;
	var promedio;
	var respuesta="si";

	while(contador<5)
	{
		while (respuesta!="no")
		{
			notas = prompt("Ingrese notas ");
			notas = parseInt(notas);

			while(notas<0 || notas>10)
			{
				notas = prompt("Error, ingrese notas");
			}
			sexo = prompt("Ingrese sexo ");

			while(sexo!='f' && sexo!='m')
			{
				sexo = prompt("Error, ingrese sexo");
			}
			if(notas>5 && sexo=='m')
			{
				sexoVaron=sexoVaron+1;
			}
			
			if(contador==0)
			{
				notasBajas=notas;
				sexoNota=sexo;
			}
			else
			{
				if(notas<notasBajas)
				{
					notasBajas=notas;
					sexoNota=sexo;
				}

			}						

			respuesta = prompt("Quiere seguir ingresando?");
			contador=contador+1;
			suma=suma+notas;
			promedio=suma/contador;		
		}

	}

	document.write("1) promedio: " + promedio +"<br>" +
		"2) nota mas baja: " + notasBajas + " y su sexo: "+ sexoNota + "<br>" +
		"3) cantidad de varones mayor a 6: "+ sexoVaron);

}
