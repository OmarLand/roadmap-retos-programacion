/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 */

// Clase base (Padre)
class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace ${this.sonido}`);
    }
}

// Clase derivada (Hijo)
class Perro extends Animal {
    constructor(nombre, raza) {
        // Llamamos al constructor de la clase base
        super(nombre, "ladrido");
        this.raza = raza;
    }

    mostrarRaza() {
        console.log(`${this.nombre} es de raza ${this.raza}`);
    }
}

// Clase derivada (Hijo)
class Gato extends Animal {
    constructor(nombre, color) {
        // Llamamos al constructor de la clase base
        super(nombre, "maullido");
        this.color = color;
    }

    mostrarColor() {
        console.log(`${this.nombre} es de color ${this.color}`);
    }
}

// Uso de las clases
const miPerro = new Perro("Rex", "Pastor Alemán");
miPerro.hacerSonido();  // Output: Rex hace ladrido
miPerro.mostrarRaza();  // Output: Rex es de raza Pastor Alemán

const miGato = new Gato("Misu", "gris");
miGato.hacerSonido();  // Output: Misu hace maullido
miGato.mostrarColor();  // Output: Misu es de color negro



/*
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

// Iniciamos la clase Padre /Empleado/

class Empleado{
    constructor(id, nombre){
        this.id     = id;
        this.nombre = nombre;
        this.empleadosACargo = [];
    }

    agregarEmpleadosACargo( empleado ){
        this.empleadosACargo.push( empleado )
    }

    mostrarEmpleadosACargo(){
        console.log(`Los empleados a cargo de ${this.nombre}:`);
        this.empleadosACargo.forEach( empleado => {
            console.log( `* ${empleado.nombre} (ID: ${empleado.id})` );
            
        });
        
    }
}

// Iniciamos clase Hijo Gerente de Proyectos - Heredamos del Padre Empleado
class Gerente extends Empleado {
    constructor( id, nombre, departamento ){
        super(id, nombre);
        this.departamento = departamento;
    }

    supervisar(){
        console.log(`${this.nombre} está supervisando el departamento de ${this.departamento}.`);
    }
}

// Clase Hijo (Gerente de Proyectos)
class GerenteDeProyectos extends Empleado {
    constructor( id, nombre, proyecto ){
        super(id, nombre);
        this.proyecto = proyecto;
    }

    planificar(){
        console.log(`${this.nombre} está planificando el proyecto ${this.proyecto}.`);
    }
}

// Clase derivada (Programador)
class Programador extends Empleado{
    constructor(id, nombre, lenguaje){
        super(id, nombre);
        this.lenguaje = lenguaje;
    }

    programar(){
        console.log(`${this.nombre} está programando en ${this.lenguaje}.`);
    }
}

// Ahora creamos los empleados:
const gerente1 = new Gerente(1, "Omar", "Desarrollo");
const gerenteDeProyect1 = new GerenteDeProyectos(2, "Delphy","Sistema gestión Compras y Ventas");
const programador1 = new Programador(3,"Luis","Javascript");
const programador2 = new Programador(3,"Lio","Posgresql");

// Establacemos la Jerarquia
gerente1.agregarEmpleadosACargo(gerenteDeProyect1);
gerenteDeProyect1.agregarEmpleadosACargo(programador1);
gerenteDeProyect1.agregarEmpleadosACargo(programador2);


// Ahora mostramos actividades y las jerarquias
gerenteDeProyect1.supervisar();
gerenteDeProyect1.planificar();
programador1.programar();
programador2.programar();

// Mostramos los empleados a cargo del gerente
gerente1.mostrarEmpleadosACargo();

// Muestra los empleados a cargo del gerente de proyectos
gerenteDeProyect1.mostrarEmpleadosACargo();