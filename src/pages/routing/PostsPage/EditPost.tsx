import { FC, Fragment } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Button, Container, Typography } from "@mui/material"

const EditPost: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const goBack = (): void => navigate(-1)

  return (
    <Fragment>
        <Container maxWidth="lg">
          <Button onClick={goBack}>go back</Button>
          <Typography variant="h5" sx={{py: 2}}>Edit post: #{id}</Typography>
        </Container>
    </Fragment>
  )
}

export { EditPost }