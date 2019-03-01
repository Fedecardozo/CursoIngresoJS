function mostrar()
{
//tomo la edad  
	var edad;
	var estado;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estado=document.getElementById("estadoCivil").value;

	if(edad>17 && estado=="Soltero")
	{
		alert(" Es soltero y no es menor ");
	}
	else
	{

	}

	


}//FIN DE LA FUNCIÓN