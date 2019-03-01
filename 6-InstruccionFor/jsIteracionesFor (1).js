function mostrar()
{
	var contador;

	contador = 0;
	for( ; ;)
	{
		document.write(contador);
		contador++;
		if(contador==5)
			break
	}
}