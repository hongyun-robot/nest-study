import { Random } from 'mockjs'
import { create } from '../helper'

export async function article(count = 1) {
  await create(count, async (prisma) => {
    await prisma.article.create({
      data: {
        title: Random.ctitle(),
        context: Random.cparagraph(10, 50),
      },
    })
  })
}
