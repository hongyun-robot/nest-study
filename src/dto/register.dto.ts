import { IsNotEmpty, Length, Validate } from 'class-validator'
import IsConfirmed from 'src/rule/is-confirmed.rule'
import IsNotExists from 'src/rule/is-not-exists.rule'

export default class RegisterDto {
  @IsNotEmpty({ message: '账号不能为空' })
  @IsNotExists('user', { message: '用户已存在' })
  account: string
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 12, { message: '密码必须6 ~ 12位' })
  password: string
  @IsNotEmpty({ message: '密码不能为空' })
  @Validate(IsConfirmed, { message: '密码不能为空' })
  password_confirmed: string
}
