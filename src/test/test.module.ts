import { Module } from '@nestjs/common'
import { TestService } from './test.service'

@Module({
  providers: [
    TestService,
    {
      provide: 'test',
      useValue: 'test value',
    },
    {
      provide: 'async',
      useFactory: async () => {
        return new Promise((res) => {
          setTimeout(() => {
            res('async test')
          }, 1000 * 3)
        })
      },
    },
  ],
  exports: [TestService, 'test', 'async'],
})
export class TestModule {}
