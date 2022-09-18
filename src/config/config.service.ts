import { Inject, Injectable, Optional } from '@nestjs/common'
import { resolve } from 'path'
import { readdirSync } from 'fs'

@Injectable()
export class ConfigService {
  constructor(@Optional() private config = {}, @Inject('CONFIG_OPTIONS') options: { path: string }) {
    readdirSync(options.path).forEach(async (path) => {
      if (path.slice(-2) === 'js') {
        const file = await import(resolve(options.path, path))
        this.config = { ...this.config, ...file.default() }
      }
    })
  }

  get(path: string): string {
    return path.split('.').reduce((pre, item) => pre[item], this.config)
  }
}
