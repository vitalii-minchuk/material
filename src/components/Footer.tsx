import { FC, Fragment } from "react"

import { Container, Typography } from "@mui/material"
import { Wrapper } from "./MUI/CustomComponents/Wrapper"

const Footer: FC = () => {
  return (
    <Fragment>
      <Wrapper bg="teal" color="white">
        <Container maxWidth="lg" sx={{paddingY: "5px"}}>
          <Typography variant="body1" align="center">2022</Typography>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export { Footer }