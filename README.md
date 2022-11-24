# Greydive - Challenge

Realizar una app en React.js que lea este archivo JSON y genere por cada ítem, una nueva url o ruta con todas sus propiedades.

Cada nueva URL, debe contener todos los datos de un test:

- Cliente
- Testeador
- Url del video
- Tareas
- Transcripción

### Technologies used

| Name                      | Link                                                    |
| ------------------------- | ------------------------------------------------------- |
| React                     | https://es.reactjs.org/                                 |
| React Router Dom          | https://reactrouter.com/en/main                         |
| Axios                     | https://axios-http.com/docs/intro                       |
| React Icons               | https://react-icons.github.io/react-icons               |
| Framer Motion             | https://www.framer.com/motion/                          |
| React Spinners            | https://www.npmjs.com/package/react-spinners            |

### Comments

- Utilicé Context API para manejar el estado de la aplicación. En **ClientProvider** se encuentra la lógica para obtener los datos del JSON, el state del filtro de los datos y el estado de carga de la aplicación. **React-Router-Dom** se encarga de generar las rutas dinámicas. Usé **Axios** para hacer la petición al JSON.

- Además, tomé la decisión de usar **Context API** para realizar una sola request al JSON y no tener que hacerla en cada componente.

- En **/pages** se encuentra el componente principal de la aplicación, **HomePage**, este se encarga de trabajar la lógica de negocio y baja la data a **HomeList**, el cual mapea los datos del JSON y los renderiza en **HomeRender**. **ClientPage** se maneja de manera similar, con la diferencia de que recibe los datos del cliente por medio de **useParams** y realiza un filtro para obtener los datos del cliente y renderizarlos en **ClientRender**.

- Apliqué **Single Responsibility Principle** para que cada componente tenga una responsabilidad única, están divididos en **Statefull** y **Stateless Components**.

- Utilicé **Framer-Motion** para las animaciones, **React-Icons** para los íconos, **Chakra-UI** para el diseño de la aplicación y React Spinners para el loader.

## Barrels

- En todas las carpetas se encuentra un archivo llamado **index.ts**, el cual exporta todos los componentes. Esto lo hice para evitar importarlos de manera individual.