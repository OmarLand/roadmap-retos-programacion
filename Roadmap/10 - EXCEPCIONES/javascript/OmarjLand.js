/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
*/

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero"); // Lanza una excepción
    }
    return a / b;
}

try {
    // Intentamos dividir por cero
    let resultado = dividir(10, 0);
    console.log(`El resultado es ${resultado}`);
} catch (error) {
    // Captura y maneja la excepción
    console.error(`Ocurrió un error: ${error.message}`);
} finally {
    // Código que siempre se ejecuta, ocurra o no una excepción
    console.log("Operación de división finalizada.");
}


/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
*/

// Definimos un tipo de error Personalizado y Controlado:
class MyError extends Error{
    constructor( message ){
        super(message);
        this.name = 'MyError';
    }
}

// Funciones qie procesan parámetros y lanza las excepciones personalizadas:
function procesarParametros(valueA,valueB){
    if( typeof a !== 'number' || typeof b !== 'number' ){
        throw new TypeError('Los parámetros deben ser números.');
    }

    if( b === 0 ){
        throw new RangeError('El segundo parámetro no puede ser cero.');
    }

    if( a < 0 ){
        throw new MyError('El Primer parámetro no puede ser negativo.');
    }

    return a / b;
}

// En este punto, llamamos la función y capturamos las excepciones:
try{
    const resultado = procesarParametros(20,2);
    console.log( `'El resultado es: ${ resultado }` );
    console.log('No se ha producido ningún Error.');
} catch(error){
    console.error(`Se ha producido un error de tipo: ${error.name}`);
    console.error(`Mensaje del error: ${error.message}`);
} finally {
    console.log("La ejecución ha finalizado.");
}