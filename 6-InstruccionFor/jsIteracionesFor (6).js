function mostrar()
{
	var numero;
	var contador=0;
	var i;

	numero=prompt("Ingrese numero ");
	numero=parseInt(numero);

	for(i=1 ; i<=numero; i++)
	{
		if(i%2 == 0)
		{
			contador++;
		}
	}
	document.write(contador);

}//FIN DE LA FUNCIÓN