import { ValidateExceptionFilter } from './validate-exception.filter'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new ValidateExceptionFilter())
  await app.listen(3000)
}
bootstrap()
