import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  // this `await` is never resolved, nor is anything ever logged
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.useLogger(logger);
  await app.listen(3000, () => console.log('YOU WONT SEE ME'));
}
bootstrap();
