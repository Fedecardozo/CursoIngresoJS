function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var nombreMax;
	var temperaturaMax;
	var promedio;
	var suma=0;
	var pesoMax;
	var pesoMaximo;
	var pesoMinimo;
	var contador=0;
	var contadorPar=0;
	var contadorTempe=0;	
	var respuesta="si";

	while(respuesta!="no")
	{
		nombre = prompt("Ingrese nombre: ");

		peso = prompt("Ingrese peso: ");
		peso = parseInt(peso);

		while(peso<1 || peso>1000)
		{
			peso = prompt("Error, ingrese peso");
			peso = parseInt(peso);
		} 

		temperatura = prompt("Ingrese temperatura ");
		temperatura = parseInt(temperatura);

		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Error, ingrese temperatura");
			temperatura = parseInt(temperatura);
		}
		if(temperatura%2 == 0)
		{
			contadorPar++;
		}
		if(temperatura<0)
		{
			contadorTempe++;
		}
		
		if(contador == 0)
		{
			pesoMax=peso;
			pesoMinimo=peso;
			pesoMaximo=peso;
			nombreMax=nombre;
			temperaturaMax=temperatura;
		}
		else
		{
			if(peso>pesoMax)
			{
				nombreMax=nombre;
				temperaturaMax=temperatura;
			}	
			if(contadorTempe==0)			
			{
				pesoMaximo=peso;
				pesoMinimo=peso;
			}
			else
			{
				if(peso>pesoMaximo)
				{
					pesoMaximo=peso;
				}
				if(peso<pesoMinimo)
				{
					pesoMinimo=peso;
				}
			}
		}

		contador++; 		
		respuesta = prompt("Quiere seguir?");
		suma = suma + peso;
		promedio = suma/contador;		
	}
	document.write("1- contador temp par: " + contadorPar + "<br>" +
	"2- Nombre: " + nombreMax + " temperatura: " + temperatura + "<br>" + 
	"3- contador temperatura: " + contadorTempe + "<br>" +
	"4- promedio peso: " + promedio + "<br>" + 
	"5- peso maximo -0: " + pesoMaximo + "<br>" + 
	"6- peso minimo -0: " + pesoMinimo );

}
