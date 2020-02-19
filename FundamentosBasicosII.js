/*Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, 
por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].*/

function grande(x){
    for (var i=0; i<x.length; i++){
        if (x[i]>0){
            x[i] = "big";
        }
    }
    return x;
}

//-------------------------------------------------------------------------------------------------------
/*Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números.
La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. */

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
/*Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/

function ppr1(x) {
    print (x[x.length-2]);
    for (var i=0; i<x.length; i++){
        if(x[i]%2 != 0){
            return x[i];
        }
    }
}

//-------------------------------------------------------------------------------------------------------
/*Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique.
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.*/

function doble(x){
    for (var i=0; i<x.length; i++){
        x[i] = x[i] * 2;
    }
    return x;
}

//-------------------------------------------------------------------------------------------------------
/*Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número
de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original 
y devuelve [-1,1,1,3]. */

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
/*Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.*/

function ParImpar(x) {
    var par = 0;
    var impar = 0;
    for (var i=0; i<x.length || par==3; i++){
        if (x[i]%2 == 0){
            par++;
        }
    }

    for (var i=0; i<x.length || impar==3; i++){
        if (x[i]%2 != 0){
            impar++;
        }
    }


    if (par == 3){
        return "¡Es para bien!";
    }else if (impar == 3){
        return "¡Qué imparcial!";
    }else{
        return "No se encontraron 3 pares o 3 impares seguidos";
    }
}