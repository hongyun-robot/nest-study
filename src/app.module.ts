import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigService } from './config.service'
import { DbService } from './db/db.service'
import { ZhyModule } from './zhy/zhy.module'
import { TestModule } from './test/test.module'

@Module({
  imports: [ZhyModule, TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: 'DbService',
      inject: ['ConfigService'],
      useFactory(configService) {
        return new DbService(configService)
      },
    },
  ],
})
export class AppModule {}
