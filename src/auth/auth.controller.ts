import { AuthService } from './auth.service'
import { Body, Controller, Post } from '@nestjs/common'
import RegisterDto from './dto/register.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return dto
  }
}
