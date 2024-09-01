import { PostModel } from "./post.model"

const PostService = {
  getPosts(): Promise<PostModel[]> {
    return fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => data.posts)
  },
}

export { PostService }
