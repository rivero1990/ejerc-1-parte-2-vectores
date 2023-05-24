const colores = ["amarillo", "verde", "blanco", "negro", "verde", "azul", "rojo"];
const edades = [5, 10, 14, 23, 30, 39, 54];
const booleanos = [true, false, true, false, true, false, true];

console.log(colores[0] , colores[3] , colores[colores.length -1]);
console.log(edades[0] , edades[3] , edades[edades.length -1]);
console.log(booleanos[0] , booleanos[3] , booleanos[booleanos.length -1]);

console.log(
    (colores[2]) + " Es un dato de tipo 'string' y pertenece al vector 'colores'\n" +
    (edades[1] ) + " Es un dato de tipo 'number' y pertenece al vector 'edades'\n" +
    (colores[5]) + " Es un dato de tipo 'booleano' y pertenece al vector 'booleanos'"
);