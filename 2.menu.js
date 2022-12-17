var menu= 'Menu\n';
menu += '*****MENU DE RECOMENDACIONES*****\n';
menu += '1.Literatura\n';
menu += '2.Cine\n';
menu += '3.Musica\n';
menu += '4.Videojuegos\n';
menu += '5.Salir\n';
menu += 'Ingrese una opcion:\n';

var literatura = 'Lecturas recomendables:\n';
literatura += '+ Esperándolo a Tito y otros cuentos de fúbol \n';
literatura += '+ El juego de Ender (Orson Scott Card)\n';
literatura += '+ El sueño de los héroes (Adolfo Bioy Casares) \n';

var peliculas = 'Películas recomendables: \n';
peliculas += '+ Matrix (1999)\n';
peliculas += '+ El último samuray (2003)\n';
peliculas += '+ Cars (2006)\n';

var discos = 'Discos recomendables:\n'
discos += '+ Despedazado por mil partes (La Renga, 1996)\n'
discos += '+ Búfalo (La Mississippi, 2008)\n'
discos += '+ Gaia (Mägo de Oz, 2003)\n'

var Videojuegos = 'Videojuegos clásicos recomendables\n';
Videojuegos += '+ Día del tentáculo (LucasArts, 1993)\n';
Videojuegos += '+ Terminal Velocity (Terminal Reality/3D Realms\n';
Videojuegos += '+ Death Rally (Remedy/Apogee, 1996)\n';

var opc = 1;
console.log(menu);
do{
switch(opc){
    case 1:
        console.log(literatura);
    break;
    case 2:
        console.log(peliculas);
    break;
    case 3:
        console.log(discos);
    break;
    case 4:
        console.log(Videojuegos);
    break;
  }
  opc++;

}while(opc != 5)