# CursoProfesionalJavascript
Curso Profesinal de Javascript

#This
this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

Cuando llamamos a this en el Global Scope o Function Scope, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto.
Cuando llamamos a this desde una “clase”, se hace referencia a la instancia generada por el constructor.