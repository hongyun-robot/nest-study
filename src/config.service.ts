import { config } from 'dotenv'
import { join } from 'path'
import { devConfig } from './config/dev.config'
import { proConfig } from './config/pro.config'

config({ path: join(__dirname, '../.env') })

export const ConfigService = {
  provide: 'ConfigService',
  useValue: process.env.NODE_ENV === 'development' ? devConfig : proConfig,
}
