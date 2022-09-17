import { Module } from '@nestjs/common'
import { ZhyService } from './zhy.service'
import { ZhyController } from './zhy.controller'
import { TestModule } from '../test/test.module'

@Module({
  imports: [TestModule],
  providers: [ZhyService],
  controllers: [ZhyController],
})
export class ZhyModule {}
