import { Controller, Get } from '@nestjs/common';

@Controller('date')
export class DateController {
  @Get()
  getDate() {
    return { date: new Date().toISOString() };
  }
}
