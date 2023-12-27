import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // !Para usar '@UsePipes' || new ValidationPipe()  se debe instalar "yarn add  class-validator class-transformer".
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // !Elimina los atributos que no estén en el DTO, es decir solo deja los que tenemos declarados en el DTO.
      forbidNonWhitelisted: true, // !Lanza un error si alguno de los atributos no está en el DTO.
    }),
  );
  await app.listen(3000);
}
bootstrap();
