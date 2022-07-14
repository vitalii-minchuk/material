import { FC } from "react"
import { Link } from "react-router-dom"

import { Button, Container, Typography } from "@mui/material"

const Error: FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{py: 2}}>Error</Typography>
      <Link to="/routing">
        <Button variant="text">go to Home</Button>
      </Link>
    </Container>
  )
}

export { Error }