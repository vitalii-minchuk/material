import { FC } from "react"

import { Container, Typography } from "@mui/material"

const Home: FC = () => {
  return (
    <Container maxWidth="lg">
        <Typography variant="h5" sx={{py: 2}}>Home</Typography>
    </Container>
  )
}

export { Home }