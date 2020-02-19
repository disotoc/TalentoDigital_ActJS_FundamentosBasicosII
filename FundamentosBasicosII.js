/**
 * Fundamentos Básicos II
 */
//-------------------------------------------------------------------------------------------------------
/**
 * Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, 
 * por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
 */
function grande(x){
    for (var i=0; i<x.length; i++){
        if (x[i]>0){
            x[i] = "big";
        }
    }
    return x;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números.
 * La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.
 */
function pmrm(x){
    min = x[0];
    max = x[0];

    for (var i=0; i<x.length; i++){
        if (x[i]>max) {
            max = x[i];
        } else if (x[i]<min){
            min = x[i];
        }
    }
    print (min);
    return max;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
 * La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
 */
function ppr1(x) {
    print (x[x.length-2]);
    for (var i=0; i<x.length; i++){
        if(x[i]%2 != 0){
            return x[i];
        }
    }
}
//-------------------------------------------------------------------------------------------------------
/**
 * Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique.
 * Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.
 */
function doble(x){
    for (var i=0; i<x.length; i++){
        x[i] = x[i] * 2;
    }
    return x;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número
 * de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original 
 * y devuelve [-1,1,1,3].
 */
function contarPositivos(x) {
    var contador = 0;
    for (var i=0; i<x.length; i++){
        if (x[i]>0){
            contador++;
        }
    }
    x[x.length-1] = contador;
    return x;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
 * imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
 */
function ParImpar(x) {
    var par = 0;
    var impar = 0;
    for (var i=0; i<x.length; i++){
        if (x[i]%2 == 1){
            impar++;
          if (impar == 3){
            return "¡Qué imparcial!";
          }
        }else{
          impar = 0;
        }
    }
    for (var i=0; i<x.length; i++){
        if (x[i]%2 == 0){
            par++;
          if (par == 3){
            return "¡Es para bien!";
          }
        }else{
          par = 0;
        }
    }
    return "No se encontraron 3 pares o 3 impares seguidos";
}
//-------------------------------------------------------------------------------------------------------
/**
 * Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a 
 * aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
 */
function Incrementa(x){
    for (var i = 0; i < x.length; i++) {
        if (i%2 == 1) {
            x[i] = x[i]+1;
        }
    }
    return x;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
 * reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, 
 * longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede 
 * ir hacia adelante?
 */
function longitudesPrevias(x){
    for (var i = x.length - 1; i >= 0; i--) {
        if (typeof(x[i-1]) == 'string'){
            x[i] = x[i-1].length;
        }
    }
    return x;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, 
 * pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] 
 * en un nuevo array. 
 */
function agregaSiete(x){
    var newArray = [];
    for (var i = 0; i < x.length; i++) {
        newArray.push(x[i]+7);
    }
    return newArray;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: 
 * invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
 * Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
 */
function invertir(x){
    var longitud = x.length;
    for (var i = 0; i<longitud/2; i++) {
        var temp = x[i];
        var indiceContrario = longitud-i-1;
        x[i] = x[indiceContrario];
        x[indiceContrario] = temp;
    }
    return x;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores 
 * del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], 
 * devuelve [-1,-3,-5].
 */
function PerspectivaNegativa(x){
    for (var i = 0; i < x.length; i++) {
        if (x[i]>0) {
            x[i] = x[i]*-1;
        }
    }
    return x;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que 
 * alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
 */
function SiempreHambriendo(x){
    var contador = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] == 'comida'){
            console.log('yummy');
            contador++;
        }
    }
    if (contador == 0) {
        console.log('Tengo hambre');
    }
}
//-------------------------------------------------------------------------------------------------------
/**
 * Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
 * Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. 
 * cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el 
 * array esta vez. 
 */
function cambiaHaciaElCentro(x){
//Creo que el ejercicio implica hacer algo adicional, pero sólo se realiza en base a la pregunta.
var primerElemento = x[0];
var tercerElemento = x[2];
x[0] = x[x.length-1];
x[2] = x[x.length-3];
x[x.length-1] = primerElemento;
x[x.length-3] = tercerElemento;
}
//-------------------------------------------------------------------------------------------------------
/**
 * Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el 
 * número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
 */
function escalaArray(arr, num){
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*num;
    }
    return arr;
}