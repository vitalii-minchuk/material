import { FC, Fragment, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Button, Container, Stack, Typography } from "@mui/material"
import { Wrapper } from "./MUI/CustomComponents/Wrapper"
import { CustomNavLink } from "./MUI/CustomComponents/CustomNavLink"
import { AuthContext } from "../hoc/AuthProvider"


// const setActiveLink = ({ isActive }) => isActive ? "active-nav-link" : ""

const Header: FC = () => {
  const { isAuth, logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
    navigate("/", {replace: true})
  }
console.log(isAuth);

  return (
    <Fragment>
      <Wrapper bg="teal" color="white">
        <Container maxWidth="lg">
          <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
            <Typography variant="h5">LOGO</Typography>
            <Stack component="nav" flexDirection="row" gap={3}>
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/contacts">Contacts</CustomNavLink>
              <CustomNavLink to="/about">About</CustomNavLink>
              <CustomNavLink to="/posts">Posts</CustomNavLink>
            </Stack>
            {isAuth ? (
              <Button onClick={handleLogOut}>log out</Button>
            ) : (
              <Link to="login">
                <Button>Log in</Button>
              </Link>
            )}

          </Stack>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export { Header }