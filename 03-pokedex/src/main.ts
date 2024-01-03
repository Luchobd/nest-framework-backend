import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Esto es utilizado para colocar un 'prefijo' de manera modular y general en mis rutas URL.
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // tranforma la data de los dto a loque se requiera, es decir en este caso el valor llega como string pero en el dto lo declaro como number y llegara como number.
      transformOptions: {
        enableImplicitConversion: true, // tranforma la data de los dto a loque se requiera, es decir en este caso el valor llega como string pero en el dto lo declaro como number y llegara como number.
      },
    }),
  );

  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
