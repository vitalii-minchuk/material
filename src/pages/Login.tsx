import { FC, Fragment, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { AuthContext } from "../hoc/AuthProvider"

import { Button, Typography } from "@mui/material"

const Login: FC = () => {
  const { logIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
//@ts-ignore
  const from = location.state?.from?.pathname

  const handleLogIn = () => {
    logIn()
    
    if (from?.includes("new") || from?.includes("edit")) {
      navigate(`${from}`, {replace: true})
    } else {
      navigate("/", {replace: true})
    }
  }

  return (
    <Fragment>
      <Typography variant="h5">login</Typography>
      <Button onClick={handleLogIn}>ok</Button>
    </Fragment>
  )
}

export { Login }