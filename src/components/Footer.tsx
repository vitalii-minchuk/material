import { FC, Fragment } from "react"
import { Wrapper } from "./MUI/CustomComponents/Wrapper"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const Footer: FC = () => {
  return (
    <Fragment>
      <Wrapper bg="red" color="white">
        <Container maxWidth="lg" sx={{paddingY: "5px"}}>
          <Typography variant="body1" align="center">2022</Typography>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export default Footer