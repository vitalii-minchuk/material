import { FC, Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Container, Stack, Typography } from "@mui/material"

const Header: FC = () => {
  const navigate = useNavigate()
  
  return (
    <Fragment>
        <Container maxWidth="lg">
          <Stack
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography
              variant="h5"
              onClick={() => navigate("/")}
            >
              LOGO
            </Typography>
            <Stack component="nav" flexDirection="row" gap={1} alignItems="center">
              <Link to="">
                <Typography>Home</Typography>
              </Link>
              <Link to="bank">Bank Account</Link>
              <Link to="donation">Donation</Link>
              <Link to="millionaire">Millionaire</Link>
            </Stack>
          </Stack>
        </Container>
    </Fragment>
  )
}

export { Header }