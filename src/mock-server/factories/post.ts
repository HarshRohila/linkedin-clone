import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

const PostFactory = Factory.extend({
  text: () => faker.lorem.paragraphs({ min: 1, max: 2 }),
})

export { PostFactory }
