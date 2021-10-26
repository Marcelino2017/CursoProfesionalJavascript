# CursoProfesionalJavascript
Curso Profesinal de Javascript

#This
this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

Cuando llamamos a this en el Global Scope o Function Scope, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto.
Cuando llamamos a this desde una “clase”, se hace referencia a la instancia generada por el constructor.

#EVENT LOOP
El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

Stack. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
Memory Heap. De forma desorganizada se guarda información de las variables y del scope.
Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
Task Queue. Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
MicroTask Queue. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.
El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.

# VisibilityChange
El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

# Service Workers
Sirven para hacer que nuestras aplicaciones funcionen Offline.

Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.

# TypeScript
TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.

# Interfaces
Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

# Qué es un patrón de diseño
Son soluciones generales ya probadas dentro de un contexto que las limita a problemas frecuentes que nos encontramos en el desarrollo de software.

# Categoria de  patrones de diseño
- Creacionales. Proveen diferentes mecanismos para crear objetos.
- Estructurales. Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
- De Comportamiento. Gestionan algoritmos y responsabilidades entre objetos.

➡️Creacionales
Proveen diferentes mecanismos para crear objetos.

Abstract Factory
Builder
Factory Method
Prototype
Singleton

➡️Estructurales
Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
Adapter
Bridge
Composite
Decorator
Facade
Flyweight
Proxy

➡️Comportamiento
Gestionan algoritmos y responsabilidades entre objetos.
Chain of Responsibility
Command
Interpreter
Iterator
Mediator
Memento
Observer
State
Strategy
Template Method
Visitor

# Patrón Singleton y Casos de Uso
Es un patrón que te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.

# ¿Cómo funciona el Patrón Observer?

El patrón observer se compone de un sujeto que ofrece mecanismos de suscripción y desuscripción a múltiples observadores que quieren ser notificados de los cambios en dicho sujeto. Cada observador expone un método de update que es usado por el sujeto para notificar cualquier cambio a todos los suscritos.

Es uno de los patrones más utilizados, algunos ejemplos típicos son:

Newsletter
Sockets
Listeners en páginas web

# Patrón Decorator y Casos de Uso
Añade nuevas responsabilidades a un objeto de forma dinámica permitiendo así extender su funcionalidad sin tener que usar subclases.

El patrón Decorator responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera.

## Motivación
Un ejemplo para poder ver la aplicabilidad del patrón decorador podría ser el siguiente:

+ Disponemos de una herramienta para crear interfaces gráﬁcas,  que permite añadir funcionalidades como bordes o barras de desplazamiento a cualquier componente de la interfaz.

+ Una posible solución sería utilizar la herencia para extender las responsabilidades de la clase. Si optamos por esta solución, estaríamos haciendo un diseño inflexible (estático), ya que el cliente no puede controlar cuándo y cómo decorar el componente con esa propiedad.

+ La solución está en encapsular dentro de otro objeto, llamado Decorador, las nuevas responsabilidades. El decorador redirige las peticiones al componente y, además, puede realizar acciones adicionales antes y después de la redirección. De este modo, se pueden añadir decoradores con cualidades añadidas recursivamente.

+ En este diagrama de clases, podemos ver que la interfaz decorador implementa la interfaz del componente, redirigiendo todos los métodos al componente visual que encapsula. Las subclases decoradoras refinan los métodos del componente, añadiendo responsabilidades. También se puede ver que el cliente no necesita hacer distinción entre los componentes visuales decorados y los sin decorar.

+ La solución está en encapsular dentro de otro objeto, llamado Decorador, las nuevas responsabilidades. El decorador redirige las peticiones al componente y, además, puede realizar acciones adicionales antes y después de la redirección. De este modo, se pueden añadir decoradores con cualidades añadidas recursivamente.

+ En este diagrama de clases, podemos ver que la interfaz decorador implementa la interfaz del componente, redirigiendo todos los métodos al componente visual que encapsula. Las subclases decoradoras refinan los métodos del componente, añadiendo responsabilidades.

+ También se puede ver que el cliente no necesita hacer distinción entre los componentes visuales decorados y los sin decorar.

## Aplicabilidad
+ Añadir responsabilidades a objetos individuales de forma dinámica y transparente
+ Responsabilidades de un objeto pueden ser retiradas
+ Cuando la extensión mediante la herencia no es viable
+ Hay una necesidad de extender la funcionalidad de una clase, pero no hay razones para extenderlo a través de la herencia.
+ Existe la necesidad de extender dinámicamente la funcionalidad de un objeto y quizás quitar la funcionalidad extendida.

## Estructura
+ Componente: Deﬁne la interfaz para los objetos que pueden tener responsabilidades añadidas.

+ Componente Concreto: Deﬁne un objeto al cual se le pueden agregar responsabilidades adicionales.

+ Decorador: Mantiene una referencia al componente asociado. Implementa la interfaz de la superclase Componente delegando en el componente asociado.

+ Decorador Concreto: Añade responsabilidades al componente.

## Colaboraciones
+ El decorador redirige las peticiones al componente asociado.
+ Opcionalmente puede realizar tareas adicionales antes y después de redirigir la petición.

*Consecuencias
+ Más flexible que la herencia. Al utilizar este patrón, se pueden añadir y eliminar responsabilidades en tiempo de ejecución. Además, evita la utilización de la herencia con muchas clases y también, en algunos casos, la herencia múltiple.
+ Evita la aparición de clases con muchas responsabilidades en las clases superiores de la jerarquía. Este patrón nos permite ir incorporando de manera incremental responsabilidades.
+ Genera gran cantidad de objetos pequeños. El uso de decoradores da como resultado sistemas formados por muchos objetos pequeños y parecidos.
+ Puede haber problemas con la identidad de los objetos. Un decorador se comporta como un envoltorio transparente. Pero desde el punto de vista de la identidad de objetos, estos no son idénticos, por lo tanto no deberíamos apoyarnos en la identidad cuando estamos usando decoradores.

## Implementación
El patrón Decorator soluciona este problema de una manera mucho más sencilla y extensible.

Se crea a partir de Ventana la subclase abstracta VentanaDecorator y, heredando de ella, BordeDecorator y BotonDeAyudaDecorator. VentanaDecorator encapsula el comportamiento de Ventana y utiliza composición recursiva para que sea posible añadir tantas “capas” de Decorators como se desee. Podemos crear tantos Decorators como queramos heredando de VentanaDecorator.