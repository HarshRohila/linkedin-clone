import Box from "@mui/material/Box"
import { default as MCard } from "@mui/material/Card"

interface CardProps {
  children?: React.ReactNode
}

function Card({ children }: CardProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <MCard variant="outlined">{children}</MCard>
    </Box>
  )
}

export { Card }
