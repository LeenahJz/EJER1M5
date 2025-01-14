# EJERCICIO 1, MÓDULO 5


En este ejercicio se implementa el uso de un API simulada utilizando json-server. Se utilizó useEffect y useState para las peticiones. Además, se ejecutó los GET y POST con FetchAPI.

[GITHUB: https://github.com/LeenahJz/EJER1M5.git]

-CÓMO ABRIR EL CÓDIGO-
-VS--file--Open folder--EJ1M5
en terminal: 
-npm install
-json-server --watch db.json --port 3000
-npm i react-icons --save
-npm run dev

Estructura

ej1m5
_ node_Modules
  _public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   └── ServiceList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── db.json
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

Es código cumple con los requisitos solicitados siguientes:

1. Implementación de Peticiones con useEffect y useState
- Usa los Hooks useEffect y useState para realizar peticiones a una API externa (puedes
simular una API REST) que devuelva datos relacionados con los servicios médicos o el
equipo de doctores del hospital.
- Asegúrate de que los datos se carguen cuando el componente se monte en el
DOM.
- Los datos deben mostrarse correctamente en una lista o tabla en la vista
correspondiente.

2. Uso de Fetch API o Axios para el Consumo de la API 
- Implementa las peticiones a la API utilizando Fetch API o Axios para obtener los datos
de manera asíncrona.
- Explica en el README por qué has elegido una u otra opción.
- Asegúrate de manejar correctamente los errores de la petición (por ejemplo,
mostrar un mensaje de error si la API no responde o devuelve un error).

3. Peticiones Basadas en Eventos del Usuario
- Permite que el usuario realice una petición a la API mediante una interacción, como un
botón para recargar la lista de doctores o servicios médicos.

- Asegúrate de que el botón realice la petición y actualice los datos en la interfaz.

4. Manejo de Errores en Peticiones Asíncronas
- Implementa una estrategia de manejo de errores cuando la API falle o no responda.
- Muestra un mensaje en la interfaz indicando que ocurrió un error, y permite al
usuario intentar realizar la petición nuevamente.

5. Optimización del Rendimiento al Omitir Efectos en useEffect
- Implementa una optimización en useEffect para evitar que las peticiones se realicen
múltiples veces innecesariamente. Asegúrate de que la petición se realice solo cuando
el componente se monte o cuando haya un cambio relevante (por ejemplo, al hacer clic
en el botón para recargar los datos).
