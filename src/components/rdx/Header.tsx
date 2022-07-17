import { FC, Fragment } from "react"
import { Link } from "react-router-dom"

import { Container, Stack, Typography } from "@mui/material"

const Header: FC = () => {
  return (
    <Fragment>
        <Container maxWidth="lg">
          <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
            <Typography variant="h5">LOGO</Typography>
            <Stack component="nav" flexDirection="row" gap={3}>
              <Link to="">Home</Link>
              <Link to="transaction">Transaction</Link>
              <Link to="about">About</Link>
            </Stack>
          </Stack>
        </Container>
    </Fragment>
  )
}

export { Header }