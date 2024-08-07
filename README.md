# Lambda-test
# Proyecto Fullstack con React y Django Rest Framework

Esta carpeta contiene dos proyectos: un frontend desarrollado con React y un backend desarrollado con Django Rest Framework. Sigue los pasos a continuación para configurar y ejecutar ambos proyectos.

## Requisitos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- Git (https://git-scm.com/)
- Node.js y npm (https://nodejs.org/)
- Python 3 y pip (https://www.python.org/)
- Docker (En windows) o Docker y Docker-Compose en Linux
- Virtualenv (opcional, pero recomendado) (https://virtualenv.pypa.io/)


##Parte 1: Configuración del FrontEnd y Backend  (Django Rest Framework)

1. **Clona el repositorio: para realizar esto recuerda abrir tu power shell o tu simbolo del sistema, estando adentro selecciona la carpeta en la que deseas guardar este proyecto**

   ```bash
   cd <ubicacion_en_donde_guardaremos_el_proyecto>
   git clone <URL_DEL_REPOSITORIO>
2. **Proyecto FrontEnd: para realizar esto recuerda abrir tu power shell o tu simbolo del sistema, estando adentro selecciona la carpeta a la que le instalaremos las dependencias**

   ```bash
   cd <URL_DEL_REPOSITORIO>/front-end
   npm install
3. **Ejecutar el proyecto front-end: para realizar esto recuerda abrir tu power shell o tu simbolo del sistema el proyecto front-end**

   ```bash
   npm run dev

4. **Proyecto Back-End: para realizar esto recuerda abrir en tu power shell o tu simbolo del sistema el proyecto, despues de esto ejecuta los siguientes pasos, recuerda y ten muy presente tu super usuario para siguientes pasos**

   ```bash
   cd <URL_DEL_REPOSITORIO>/back-end
   python -m venv env
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py createsuperuser
   
Recuerda llenar los datos de super usuario
source env/bin/activate  # En Windows usa `env\Scripts\activate`

3. **Ejecutar el proyecto back-end: para realizar esto recuerda abrir tu power shell o tu simbolo del sistema el proyecto front-end**

   ```bash
   npm run dev

##Parte 2: Pruebas sobre el Front y el Back
1. **Podras acceder al front dandole click al siguiente link "http://localhost:5173/LogIn** o si tienes ese puerto ocupado deberas de identificar el link que te arroja el proyecto, esto normalmente en la power shell**
2. **Podras acceder al back y mirar sus modificaciones copiando y pegando el siguiente link en un buscador como google "http://127.0.0.1:8000/admin/"** no olvides ingresar con tus datos de super usuario y ten en cuenta que si tienes ocupado el puerto anteriormente mencionado deberas de ver en que puerto se esta ejecutando el proyecto**

##Parte 3: Robot de descarga de documentos.
1. **Construir este proyecto ingresando por medio de tu power shell a la carpeta del proyecto**
2. ```bash
   cd <ubicacion_en_donde_guardaremos_el_proyecto_robot>
   docker-compose --profile robot up
3. **Ya construido el contenedor podremos identificar ver la descarga del documento pedido de la siguiente forma**
   -  ingresa a docker desktop
   -  ve al apartado de volumenes que podras encontrar en la parte de la izquierda
   -  una ves adentro podras identificar un volume denomidado roboto_downloas
   -  En este podras guardar en tu maquina el documento a partir del que se encuentra en este contenedor
   -  el documento lo podras encontrar en tu maquina el el lugar guardado
4. Para detener este contenedor podras darle en el power shell control + c
5. Una vez detenido el contenedor pordras borrar los documentos desde el docker desktop
6. Aca un poco mas del contenedor
   Project structure:

```
.
├── robot ──├
            ├──Dockerfile
            ├──main.py
            ├──requirements.txt
├── README.md
├── compose.yaml
```

[_compose.yaml_](compose.yaml)

```
services:
  robot:
    build: ./robot
    profiles: [robot]
    container_name: robot
    restart: always
    environment:
      - APP_NAME=MyRobotDane
    volumes:
      - type: volume
        source: downloads
        target: /app/downloads

volumes:
  downloads:

```
   
   


   
