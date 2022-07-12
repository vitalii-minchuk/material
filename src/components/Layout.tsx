
import { FC, Fragment } from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"

const Layout: FC = () => {
  return (
    <Fragment>
      <Stack  sx={{minHeight: "100vh"}}>
        <Box component="header">
          <Header />
        </Box>
        <Box component="main">
          <Outlet />
        </Box>
        <Box component="footer" sx={{marginTop: "auto"}}>
          <Footer />
        </Box>
      </Stack>
    </Fragment>

  )
}

export default Layout