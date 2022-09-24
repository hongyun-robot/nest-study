import { user } from './seeds/user'
import { category } from './seeds/category'
import { article } from './seeds/article'

const COUNT = 30

async function run() {
  user(COUNT)
  await category(10)
  article(30)
}

run()
