import { FC, Fragment, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { AuthContext } from "../hoc/AuthProvider"
import { Type } from "typescript"

import { Button, Typography } from "@mui/material"

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
      <Typography variant="h5">login</Typography>
      <Button onClick={handleLogIn}>ok</Button>
    </Fragment>
  )
}

export { Login }