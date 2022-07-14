import { FC, Fragment, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { Type } from "typescript"
import { AuthContext } from "../../hoc/routing/AuthProvider"

import { Button, Container, Typography } from "@mui/material"

const Login: FC = () => {
  const { logIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state as Type & {from: {pathname: string}}

  const handleLogIn = () => {
    logIn()
    navigate(`${from.from.pathname}`, {replace: true})
  }

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{py: 2}}>Log in</Typography>
        <Button onClick={handleLogIn}>ok</Button>
      </Container>
    </Fragment>
  )
}

export { Login }