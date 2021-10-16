import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DateController } from './date.controller';

@Module({
  imports: [],
  controllers: [AppController, DateController],
  providers: [AppService],
})
export class AppModule {}
