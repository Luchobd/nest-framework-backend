import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    // !Esta linea de comando es para "renderizar mi sitio estatico". Es decir renderiza el HTML que tengo el la carpeta "Public". Todo lo que esta en public se puede renderizar en la web, con este servidor.
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    // !Esta linea de comando es para conectarme a mi base de datos de Mongo.
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
    CommonModule,
  ],
})
export class AppModule {}
