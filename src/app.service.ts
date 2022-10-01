import { ConfigService, ConfigType } from '@nestjs/config'
import { Inject, Injectable } from '@nestjs/common'
import databaseConfig from './config/database.config'

@Injectable()
export class AppService {
  constructor(
    private readonly globalConfig: ConfigService,
    @Inject(databaseConfig.KEY) private database: ConfigType<typeof databaseConfig>,
  ) {}

  getHello(): string {
    // type configType<T extends () => any> = T extends () => infer U ? U : T
    return this.database.password
  }
}
