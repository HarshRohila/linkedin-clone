import "./App.css"
import { Card, Typography } from "./components"
import { useAsync } from "./react-utils/useAsync"
import { PostModel, PostService } from "./posts"
import styled from "styled-components"

const PostsList = styled.ul`
  list-style-type: none;
`

function App() {
  const { data: posts, error, isLoading } = useAsync(PostService.getPosts)

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Failed to load posts</h1>}
      <PostsList>
        {(posts || []).map((post) => (
          <li>
            <CardForPost post={post} />
          </li>
        ))}
      </PostsList>
    </>
  )
}

function CardForPost({ post }: { post: PostModel }) {
  return (
    <Card>
      <Typography>{post.text}</Typography>
    </Card>
  )
}

export default App
