import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
   .setTitle('Cybergenios Avaliation API')
   .setDescription('TypeScript Nest.js + TypeORM + Clusterized Postgres API')
   .setVersion('1.0')
   .build();

   app.setGlobalPrefix("/api");
   
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);
 
  await app.listen(3000);
}
bootstrap();
