import Box from "@mui/material/Box"
import { default as MCard } from "@mui/material/Card"
import { CommonProps } from "../react-utils"
import styled from "styled-components"

const StyledMCard = styled(MCard)`
  padding: 8px 10px;
`

interface CardProps extends CommonProps {}

function Card({ children, className }: CardProps) {
  return (
    <Box className={className} sx={{ minWidth: 275 }}>
      <StyledMCard variant="outlined">{children}</StyledMCard>
    </Box>
  )
}

export { Card }
