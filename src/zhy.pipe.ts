import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class ZhyPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const object = plainToInstance(metadata.metatype, value)
    const validator = await validate(object)

    if (validator.length) {
      const message = validator.map((item) => ({ key: item.property, message: Object.values(item.constraints) }))
      throw new HttpException(message, HttpStatus.BAD_REQUEST)
    }

    return value
  }
}
