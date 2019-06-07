function mostrar()
{

	var repeticiones; 
	var i;
	
	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);

	for(i=1; i<=repeticiones; i++)
	{

		document.write(i+ " - " + "Hola UTN FRA" + "<br>");
	}

}//FIN DE LA FUNCIÓN