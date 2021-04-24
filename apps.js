// // object literal
// const persona = {
//     nombre: 'Antonio',
//     profesion: 'Desarrollador Web',
//     edad: 30
// }
// console.log(persona);

// //object constructor
// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }


// // crear nueva tarea
// const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
// const tarea2 = new Tarea('Preparar Cafe', 'Urgente');
// const tarea3 = new Tarea('Pasear al perro', 'Media');
// const tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);

const banda = 'Metalica';
const genero = 'Heavy Metal';
const canciones = [
    'Master of Puppets',
    'Seek & Destroy',
    'Enter Sandman'
];

// forma anterior
// const mealica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }


//forma nueva distroction
const metalica = {banda,genero,canciones};


console.log(metalica);

//