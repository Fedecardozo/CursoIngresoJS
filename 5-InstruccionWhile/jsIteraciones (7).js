function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;

	acumulador=0;
	contador=0;
	respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("Ingrese numero ");
		respuesta=prompt("Quiere ingresar otro numero");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN