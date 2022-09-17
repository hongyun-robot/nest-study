import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { DbService } from './db/db.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('DbService')
    private dbService: DbService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('database')
  getDatabase(): string {
    return this.dbService.get()
  }
}
