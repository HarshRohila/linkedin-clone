import { Card, Typography } from "../components"

interface PostProps {
  text: string
}

function Post({ text }: PostProps) {
  return (
    <Card>
      <Typography>{text}</Typography>
    </Card>
  )
}

export { Post }
