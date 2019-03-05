/*4-Pedir dos numeros y mostrar el el resultado:
Si son iguales los muestro concatenados. Si el primero es mayor,los resto, de lo contrario los sumo.
Si la suma es mayor a 10, ademas de mostrar el resultado, muestro el mensaje "la suma es xxx y supero el 10"
usamos IF*/

function mostrar()
{
	var numero;
	var numeroDos;
	var resta;
	var suma;
	var mensaje;

	numero=prompt("Ingrese numero");
	numeroDos=prompt("Ingrese segundo numero");
	numero=parseInt(numero);
	numeroDos=parseInt(numeroDos);

	if(numero==numeroDos)
	{
		mensaje=(" Numero uno" + numero + " numero dos " + numeroDos);
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
		}
	}
	if(suma>10)
	{
		mensaje=" La suma es " + suma + " y supero el 10 ";
	}
	alert(mensaje);
}
