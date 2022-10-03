import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

@Catch()
export class ValidateExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    if (exception instanceof BadRequestException) {
      const responseObj = exception.getResponse() as any
      const message = responseObj.message.map((item) => {
        const info = item.split('-')
        return {
          field: info[0],
          message: info[1],
        }
      })
      return response.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message,
      })
    }

    return response
  }
}
