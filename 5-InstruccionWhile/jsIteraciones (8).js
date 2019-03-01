function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var numero;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("Quiere ingresar otro numero?");
		if(numero>0)
		{
			positivo=positivo+numero;	
		}
		else
		{
			negativo=negativo*numero;	
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN