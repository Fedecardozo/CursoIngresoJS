function mostrar()
{
	var primerNum;
	var segundoNum;
	var division;
	var suma;
	var mensaje;

	primerNum = prompt("Ingrese primer numero");
	primerNum = parseInt(primerNum);
	segundoNum = prompt("Ingrse segundo numero");	
	segundoNum = parseInt(segundoNum);

	if(primerNum == segundoNum)
	{
		mensaje = " Son iguales: " + primerNum +" y " + segundoNum ;
	}
	else
	{
		if(primerNum>segundoNum)
		{
			division = primerNum/segundoNum;
			mensaje = "La division es: " + division;
		}
		else
		{
			suma = primerNum + segundoNum;
			mensaje = "La suma es: " + suma;
		}
	}

	alert(mensaje);
}	

