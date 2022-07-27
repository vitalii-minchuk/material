import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Button } from "@mui/material"

const MUIHome: FC = () => {
  const navigate = useNavigate()

  return (
    <Box p={2}>
      <Button onClick={() => navigate("/")}>Back to main page</Button>
    </Box>
  )
}

export { MUIHome }