import { createServer, Model } from "miragejs"
import { PostFactory } from "./factories"

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    models: {
      post: Model,
    },

    routes() {
      this.namespace = "api"

      this.get("/posts")
    },

    factories: {
      post: PostFactory,
    },

    seeds(server) {
      server.createList("post", 10)
    },
  })
}
