import { Controller, Get } from '@nestjs/common'
import { ConfigService } from './config/config.service'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService, private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello()
    // return 'zhy'
    return this.configService.get('database.host')
  }

  @Get('/dx')
  getDX(): string {
    return this.configService.get('ext.img')
  }
}
