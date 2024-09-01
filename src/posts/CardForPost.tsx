import { Card, Typography } from "../components"
import { styled } from "../utils"
import { PostModel } from "./post.model"

const StyledCard = styled(Card)``

function CardForPost({ post }: { post: PostModel }) {
  return (
    <StyledCard>
      <Typography>{post.text}</Typography>
    </StyledCard>
  )
}

export { CardForPost }
