<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el __.env__

7.  Arrancar el proyecto en local
```
yarn start:dev
``` 

8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

# Preparar imagen de Docker y Levantarla - Node App
- Realizar toda la configuración correspondiente en el "Dockerfile" o ver los videos de (Bonus) en el curso de NEST. 
  __Link: https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490__ 

- Build
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

- Run
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```


## Stack usado
- MongoDB
- Nest

# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
4. Arrancar la imagen nuevamente. (Solo sino se han hecho cambios)
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```


# Comandos para regresar a commit anteriores
1. Regresa el proyecto a como estaba en el ultimo commit.
```
git checkout -- .
```

2. Si deseas volver a un commit específico.
```
git checkout <hash_del_commit>
```

3. Si necesitas realizar cambios en ese commit específico y comprometerlos, puedes crear una nueva rama a partir de ese commit.
```
git checkout -b nueva_rama <hash_del_commit>
```