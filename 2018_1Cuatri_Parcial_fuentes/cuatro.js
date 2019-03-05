function mostrar()
{
	var numero;
	var numeroDos;
	var suma;
	var resta;

	numero=prompt("Ingrese numero");
	numeroDos=prompt("Ingrese segundo numero ");

	numero=parseInt(numero);
	numeroDos=parseInt(numeroDos);

	if(numero==numeroDos)
	{
		mensaje=" Son iguales " + numero + " y " + numeroDos;
	}
	else
	{
		if(numero>numeroDos)
		{
			resta=numero - numeroDos;
			mensaje=" La resta es " + resta;
		}
		else
		{
			suma=numero + numeroDos;
			mensaje=" La suma es " + suma;
		}
	}
	if(suma>10)
	{
		mensaje=" La suma es " + suma + " y supero el 10";
	}

	alert(mensaje);
}
