import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4">Instructions</Typography>
      <pre>
        {`
          Backend

          Crear una API en nodeJS que tenga las siguientes rutas para obtener información de un cliente, las rutas deberán ser:
          GET - Obtener lista de todos los clientes
          GET - Obtener cliente en base a su id
          POST - Crear cliente con los 5 campos, para la imagen usar una URL en un input tipo texto
          DELETE - Eliminar cliente (será eliminado solo del arreglo)

          La base de datos será el siguiente arreglo, el cual puede ser una simple variable en NodeJS
            [
              {
                "id": 1,
                "first_name": "Guy",
                "last_name": "Jirieck",
                "email": "gjirieck0@over-blog.com",
                "gender": "Male",
                "image": "https://robohash.org/enimautculpa.png?size=50x50&set=set1"
              },
              {
                "id": 2,
                "first_name": "Michel",
                "last_name": "Yakubov",
                "email": "myakubov1@facebook.com",
                "gender": "Male",
                "image": "https://robohash.org/similiqueipsameaque.png?size=50x50&set=set1"
              },
              {
                "id": 3,
                "first_name": "Rafaelia",
                "last_name": "Limpkin",
                "email": "rlimpkin2@elpais.com",
                "gender": "Female",
                "image": "https://robohash.org/aliquidquasiassumenda.png?size=50x50&set=set1"
              },
              {
                "id": 4,
                "first_name": "Krishnah",
                "last_name": "Lannin",
                "email": "klannin3@cbsnews.com",
                "gender": "Male",
                "image": "https://robohash.org/placeatdebitissuscipit.png?size=50x50&set=set1"
              },
              {
                "id": 5,
                "first_name": "Maurise",
                "last_name": "Logg",
                "email": "mlogg4@ft.com",
                "gender": "Male",
                "image": "https://robohash.org/voluptatesetest.png?size=50x50&set=set1"
              },
              {
                "id": 6,
                "first_name": "Bobbee",
                "last_name": "Jereatt",
                "email": "bjereatt5@nsw.gov.au",
                "gender": "Female",
                "image": "https://robohash.org/autvoluptatemfugit.png?size=50x50&set=set1"
              },
              {
                "id": 7,
                "first_name": "Rossy",
                "last_name": "Dicky",
                "email": "rdicky6@blogs.com",
                "gender": "Male",
                "image": "https://robohash.org/erroromnisplaceat.png?size=50x50&set=set1"
              },
              {
                "id": 8,
                "first_name": "Adrian",
                "last_name": "Birds",
                "email": "abirds7@sakura.ne.jp",
                "gender": "Male",
                "image": "https://robohash.org/corporistotamest.png?size=50x50&set=set1"
              },
              {
                "id": 9,
                "first_name": "Phillip",
                "last_name": "Stovine",
                "email": "pstovine8@amazonaws.com",
                "gender": "Male",
                "image": "https://robohash.org/laborenihilaut.png?size=50x50&set=set1"
              },
              {
                "id": 10,
                "first_name": "Dynah",
                "last_name": "Fitzackerley",
                "email": "dfitzackerley9@seesaa.net",
                "gender": "Female",
                "image": "https://robohash.org/temporibusvoluptasmagni.png?size=50x50&set=set1"
              }
            ]
            
          Frontend

          En el frontend se creará una vista sencilla utilizando alguna de las siguientes tecnologías:

          AngularJS
          Angular 2+
          ReactJS

          La aplicacion debera de contar con al menos tres vistas que serán:
          Lista de clientes
          Ver detalle de cliente
          Crear cliente

          Las vistas de lista y detalle deberán de mostrar la imagen en un img
          La vista de crear cliente no requiere que tenga alguna validación en los datos (lo cual es opcional si se quiere agregar) solo inputs de tipo texto

          Es importante que se haga uso del ruteo para las 3 vistas:

          /customers - Para lista de clientes (se puede usar / para esta ruta si se desea como la default)
          /customers/1 - Para cliente detalle
          /customers/create - Para crear un cliente

          Notas finales.

          Se tomará en cuenta el acomodo de los archivos y directorios, así como nombres de variables.
        `}
      </pre>
    </Box>
  )
}

export default Home;