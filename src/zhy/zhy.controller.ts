import { Controller, Get, Inject } from '@nestjs/common'
import { ZhyService } from './zhy.service'
import { TestService } from '../test/test.service'

@Controller('zhy')
export class ZhyController {
  constructor(
    private readonly zhyService: ZhyService,
    private readonly testService: TestService,
    @Inject('test')
    private test: string,
    @Inject('async')
    private asyncValue: string,
  ) {}

  @Get()
  get(): string {
    return `${this.zhyService.get()} ---- ${this.testService.get()} ---- ${this.test} ---- ${this.asyncValue}`
  }
}
