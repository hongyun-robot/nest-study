import { IsNotEmpty, Length } from 'class-validator'

export default class CreateArticleDto {
  @IsNotEmpty()
  @Length(2, 20)
  title: string
  @IsNotEmpty()
  context: string
}
