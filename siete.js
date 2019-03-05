function mostrar()
{
	var contadorAlumnos;
	var notas;
	var sexo;
	var promedio;
	var sumaNotas;
	var notaMinima;
	var sexoNotaMinima;
	var contadorNotas;

	contadorAlumnos=0;
	sumaNotas=0;
	notaMinima=0;
	contadorNotas=0;

	while(contadorAlumnos<5)
	{
		notas=prompt("Ingrese notas ");
		notas=parseInt(notas);

		while(notas<0 || notas>10)
		{
			notas=prompt(" Error, ingrese notas entre 0 y 10");
			notas=parseInt(notas);
		}
		
		sexo=prompt("Ingrese sexo ");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt(" Error, ingrese sexo valido f o m ");
		}

		sumaNotas=sumaNotas + notas;

		if(contadorAlumnos==0)
		{
			notaMinima=notas;
			sexoNotaMinima=sexo;
		}
		else
		{
			if(notaMinima>notas)
			{
				notaMinima=notas;
				sexoNotaMinima=sexo;
			}
		}
		if(sexo=="m" && notas>5)
		{
			contadorNotas=contadorNotas+1;
		}

		contadorAlumnos=contadorAlumnos+1;
	}
	promedio=sumaNotas/5;

	alert(" El promedio de las notas es: " + promedio + 
		" La nota mas baja es: " + notaMinima + " y su sexo es: " + sexoNotaMinima +
		" La cantidad de varones haya sido mayor o igual a 6 son: " + contadorNotas);
	
}
