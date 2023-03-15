import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

// "subject": "Linguagens de Programação III",
// "dayOfWeek": "Quarta",
// "start": "2023-01-29T16:00:00.000Z",
// "end": "2023-01-30T02:22:00.000Z",
