const typed = new Typed('.typed',{
  strings: ['<b class= "name">Andrés David López</b>'],
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '│',// Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


document.getElementById("menuResponsive").addEventListener("click", mostrarMenu);
document.getElementById("backMenu").addEventListener("click", ocultarMenu);
nav=document.getElementById("nav");
backMenu=document.getElementById("backMenu");

function mostrarMenu(){
	nav.style.display="block";
	backMenu.style.display="block";
}
function ocultarMenu(){
	nav.style.display="none";
	backMenu.style.display="none";
}