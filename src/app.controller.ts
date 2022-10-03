import { CustomValidate } from './validate'
// import { ZhyPipe } from './zhy.pipe'
import { PrismaClient } from '@prisma/client'
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { AppService } from './app.service'
import CreateArticleDto from './dto/create.article.dto'

@Controller()
export class AppController {
  prisma: PrismaClient

  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  }

  @Get(':id')
  getHello(@Param('id', ParseIntPipe) id: number): any {
    console.log(id)
    return this.prisma.article.findUnique({
      where: {
        id,
      },
    })
  }

  @Post('add')
  async addArticle(@Body(CustomValidate) dto: CreateArticleDto) {
    await this.prisma.article.create({
      data: dto,
    })

    return dto
  }
}
