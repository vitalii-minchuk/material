import { FC, Fragment } from "react"
import { Outlet } from "react-router-dom"

import { Box, Stack } from "@mui/material"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { AuthProvider } from "../../hoc/routing/AuthProvider"

const Layout: FC = () => {
  return (
    <Fragment>
      <AuthProvider>
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
      </AuthProvider>
    </Fragment>
  )
}

export { Layout }