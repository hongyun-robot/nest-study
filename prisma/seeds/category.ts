import { Random } from 'mockjs'
import { create } from '../helper'

export function category(count = 1) {
  create(count, async (prisma) => {
    await prisma.category.create({
      data: {
        title: Random.ctitle(),
      },
    })
  })
}
