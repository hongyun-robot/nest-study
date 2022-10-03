import { Body, Controller, Post } from '@nestjs/common'
import RegisterDto from 'src/dto/register.dto'
import { CustomValidate } from 'src/validate'

@Controller('auth')
export class AuthController {
  @Post()
  auth(@Body(CustomValidate) dto: RegisterDto) {
    return dto
  }
}
