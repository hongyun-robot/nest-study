import { Random } from 'mockjs'
import { create } from '../helper'

export function user(count = 1) {
  create(count, async (prisma) => {
    await prisma.user.create({
      data: {
        email: Random.email(),
        password: 'hongyun0808',
        github: Random.url(),
        avatar: Random.image('300x300', Random.color(), Random.string('upper', 1)),
      },
    })
  })
}
