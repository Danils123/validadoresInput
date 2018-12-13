# Validador de input de html

La intension de este proyecto es poder modularizar el comportamiento de la validación de inputs. Los módulos que se utilizaron son los siguientes:
  - Main.js: este módulo es el orquestador de toda la aplicación, permite también agregar los eventos a los diferentes input de html
  - MensajesImpresion.js: Este módulo se le delega la responsabilidad de la impresión en pantalla. Cabe recalcar este módulo tambien tiene el contenido que ira a imprimir.
  - Validaciones.js: Este módulo es el encargado de realizar las respectectivas validaciones. Se le envia el input a analizar y este al realizar la validación invoca al módulo de mensajes para su respectiva retroalimentación al usuario.
  
 También, es importante mencionar que se utilizó la libreria requireJs para modularizar todo. El proposito de segmentar así el código es para poder reutilizar comportamiento que comúnmente se repite en cada pantalla de formularios.
 
