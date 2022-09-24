import { Random } from 'mockjs'
import { create } from '../helper'

export async function article(count = 1) {
  await create(count, async (prisma) => {
    await prisma.article.create({
      data: {
        content: Random.cparagraph(10, 50),
        title: Random.ctitle(),
        thumb: Random.image('300x300', Random.color(), Random.string()),
        categoryId: Random.integer(1, 10),
      },
    })
  })
}
