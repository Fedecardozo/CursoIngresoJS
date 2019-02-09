/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividiendo;
	var numeroDivisor;
	var division;
	var resto;

	numeroDiviendo=numeroUno.value;
	numeroDivisor=numeroDos.value;
	numerodivision=divison.value;
	numreoresto=resto.value;


	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	cociente=parseInt(cociente);
	resto=parseInt(resto);


	resto=numeroDiviendo%numeroDivisor

	alert(" El resto es " + resto);
}
