telematica-examen-practico
==========================

prerequisitos:

- Tener instalado node.js y npm (https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)


instrucciones:

1. Descomprimir el archivo telematica-examen-practico.zip en la carpeta de su elección.
2. En consola dirigir el cursor dentro de la carpeta que resulta de descomprimir el archivo anterior.
3. Cada modulo de la aplicación tiene dependencias asociadas, estas se resuelven con npm así:
  3.1 Para resolver las dependencia del modulo de SAW se ejecutan los siguientes comandos:
        [..]/telematica-exmanen-practico-$ cd saw/
        [..]/telematica-exmanen-practico/saw-$ npm install
  3.2 Para resolver las dependencia del modulo de SAW se ejecutan los siguientes comandos:
        [..]/telematica-exmanen-practico-$ cd siw/
        [..]/telematica-exmanen-practico/siw-$ npm install
4. Ejecutar cada modulo de manera independiente así:
  4.1 Para ejecutar el modulo SAW que expone los web services:
        [..]/telematica-exmanen-practico/saw-$ node Application/server.js
        
      salida:
        myserver listening at http://0.0.0.0:8081
  4.2 Para ejecutar el modulo SIW 
        [..]/telematica-exmanen-practico/siw-$ node Application/server.js
        
      salida:
        => server running ....
5. Acceder a la dirección http://localhost:8080 dentro del browser de elección.
