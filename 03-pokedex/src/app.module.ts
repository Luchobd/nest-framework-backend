import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    // !Esta linea de comando es para leer variables de entorno. Para evitar problemas siempre se deja al inicio.
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema, // !Esta linea de comando es para validar las variables de entorno.
    }),
    // !Esta linea de comando es para "renderizar mi sitio estatico". Es decir renderiza el HTML que tengo el la carpeta "Public". Todo lo que esta en public se puede renderizar en la web, con este servidor.
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    // !Esta linea de comando es para conectarme a mi base de datos de Mongo. Y "dbName" le da el nombre de la DB a mongo sin necesidad de pasarla por query en la conexion de mongo atlas.
    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'pokemonsdb',
    }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
