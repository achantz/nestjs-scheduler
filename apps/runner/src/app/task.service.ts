import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private http: HttpService) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
    this.logger.debug('Scheduled job started');

    const host = process.env.API || 'localhost';
    const port = process.env.API_PORT || '3333';

    const response = await this.http
      .get(`http://${host}:${port}/api/date`)
      .toPromise()
      .then((res) => {
        return res.data;
      });

    this.logger.debug(`Response: ` + JSON.stringify(response));
    this.logger.debug('Scheduled job finished');
  }
}
