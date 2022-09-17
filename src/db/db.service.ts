import { Inject, Injectable } from '@nestjs/common'
import { Config } from '../types/config'

@Injectable()
export class DbService {
  constructor(private options: Config) {}
  get() {
    return `<h1 style="background-color: aqua">连接数据库 -- ${this.options.url}</h1>`
  }
}
