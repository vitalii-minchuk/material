import { FC, Fragment, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { AuthContext } from "../../hoc/routing/AuthProvider"

import { Button, Container, Stack, Typography } from "@mui/material"
import { Wrapper } from "./CustomComponents/Wrapper"
import { CustomNavLink } from "./CustomComponents/CustomNavLink"


// const setActiveLink = ({ isActive }) => isActive ? "active-nav-link" : ""

const Header: FC = () => {
  const { isAuth, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogOut = (): void => {
    logOut()
    navigate("/routing", {replace: true})
  }

  const handleLogIn = (): void => {
    navigate("login", {state: {from: location}})
  }

  return (
    <Fragment>
      <Wrapper bg="teal" color="white">
        <Container maxWidth="lg">
          <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
            <Typography variant="h5">LOGO</Typography>
            <Stack component="nav" flexDirection="row" gap={3}>
              <CustomNavLink to="">Home</CustomNavLink>
              <CustomNavLink to="contacts">Contacts</CustomNavLink>
              <CustomNavLink to="about">About</CustomNavLink>
              <CustomNavLink to="posts">Posts</CustomNavLink>
            </Stack>
            {isAuth ? (
              <Button color="secondary" onClick={handleLogOut}>log out</Button>
            ) : (
              <Button color="secondary"  onClick={handleLogIn}>Log in</Button>
            )}

          </Stack>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export { Header }