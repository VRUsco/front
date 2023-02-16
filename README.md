# Documentación Oriespacial Front

Servicio web hecho con React, react-router-dom y TailwindCSS.

## Estructura de Carpetas

- 📁 **public**: Contiene los archivos para la producción.
    - 🖼️ **logo.svg:** Logo Oriespacial
- 📁 **src**: Contiene los archivos que forman la aplicación de la siguiente manera:
    - 📁 ********************components********************
        - ⚛️ **Alert.jsx:** Props: título, cuerpo y  color. Define la estructura y el estilo del componente alerta que es llamado cuando un formulario es llenado correcta o incorrectamente y muestra el mensaje según las props recibidas.
        - **⚛️ Modal.jsx:** Props: estadoModal. Define la estructura y estilo de un componente modal que se mostrará sobre otro componente para dar información extra. El estadoModal es un array que contiene la información que será mostrada. Y contiene un estado que permite su activación y desactivación.
        - ⚛️ **Navbar.jsx:** Contiene el menú de navegación de la aplicación. Tiene un enlace a la página de inicio, ver usuarios, ver pruebas, ver y crear grupos, y un botón de cerrar sesión, que cambia según el estado de autenticación del usuario.
        - **⚛️ ProtectedRoute.jsx:** Este componente recibe un hijo que se renderizará solo si existe un usuario en el contexto, sino, redirige al login.
        - **⚛️ UnprotectedRoute.jsx:** Este componente recibe un hijo que se renderizará solo si NO existe un usuario en el contexto, sino, redirige al home.
    - **📁 context**
        - **⚛️ authContext.jsx:** Aquí se encuentra el estado global de la aplicación. Aloja todas las funciones que tienen peticiones al backend para traer información en la base de datos. Como loguearse, crear usuarios, traer todos los usuarios, etc.
    - 📁 **********pages**********
        - ⚛️ **Grupos.jsx:** En este componente se define la estructura y el estilo de la página de grupos, donde se puede crear y ver los grupos.
        - **⚛️ Login.jsx:**  En este componente se define la estructura y estilo de la página de Login, la cual contiene un formulario de ID de usuario y contraseña para ingresar a la aplicación.
        - **⚛️ Pruebas.jsx:** En este componente se define la estructura y el estilo de la página de pruebas, donde se pueden ver las pruebas y al darle click a alguna se pueden ver los errores cometidos en dicha prueba.
        - ⚛️ **NotFound.jsx:** En este componente se define la estructura y el estilo de la página de NotFound, la cual se renderiza cada vez que el usuario va a una ruta no definida.
        - ⚛️ **VerUsuarios.jsx:** En este componente se define la estructura y el estilo de la página de verUsuarios, donde se pueden ver todos los usuarios.
    - 📄 **index.css:** Punto de entrada de TailwindCSS para definir los estilos globalmente.
    - ⚛️ **main.jsx:** Archivo de enrrutado que usa React-router-dom para cargar los componentes definidos según la ruta en la que se encuentre el usuario.
- 📄 **package.json**: Contiene información sobre la aplicación, como su nombre, sus dependencias, scripts y otros datos. Esta información se usa para instalar todas las dependencias necesarias para que la aplicación funcione.
- 📄 **index.html**: Archivo de entrada de la aplicación.
- 📄 **.gitignore, postcss.config.cjs, tailwind.config.cjs, vite.config.js:** Archivos de configuración para las dependencias usadas.