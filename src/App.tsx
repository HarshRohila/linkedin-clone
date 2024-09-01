import "./App.css"
import { CardForPost, PostService } from "./posts"
import styled from "styled-components"
import { useAsync } from "./react-utils"

const PostsList = styled.ul`
  list-style-type: none;
  max-width: 555px;
  li ~ li {
    margin-top: 20px;
  }
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

export default App
