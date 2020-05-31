import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  // turned off to create an error
  // providers: [AppService],
})
export class AppModule {}
