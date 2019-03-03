function mostrar()
{
	var planeta;

	planeta=prompt(" Ingrese planeta ");

	switch(planeta)
	{
		case"tierra":
		mensaje="Aca vivimos";
			break;

		case"mercurio":
		case"venus":
		mensaje=" Aca hace mas calor ";
			break;

		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
		mensaje=" Aca hace mas frio ";
			break;

		default:
		mensaje=" No es un planeta valido ";
	}
	alert(mensaje);
}
