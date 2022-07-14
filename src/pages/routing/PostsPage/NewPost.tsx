import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Container, Typography } from "@mui/material"

const NewPost: FC = () => {
  const navigate = useNavigate()

  const goBack = (): void => navigate(-1)

  return (
    <Container maxWidth="lg">
    <Button onClick={goBack}>go back</Button>
      <Typography variant="h5" sx={{py: 2}}>New Post</Typography>
    </Container>
  )
}

export { NewPost }