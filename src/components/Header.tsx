import { FC, Fragment } from "react"

import { Box, Container } from "@mui/material"
import { Wrapper } from "./MUI/CustomComponents/Wrapper"
import { CustomNavLink } from "./MUI/CustomComponents/CustomNavLink"

// const setActiveLink = ({ isActive }) => isActive ? "active-nav-link" : ""

const Header: FC = () => {
  return (
    <Fragment>
      <Wrapper bg="teal" color="white">
        <Container maxWidth="lg">
          <Box component="nav">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/contacts">Contacts</CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
            <CustomNavLink to="/posts">Posts</CustomNavLink>
          </Box>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export { Header }