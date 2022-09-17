import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  constructor(
    @Inject('ConfigService')
    private configService: Record<string, any>,
  ) {}
  getHello(): string {
    return ` ———— ${this.configService.url}`
  }
}
