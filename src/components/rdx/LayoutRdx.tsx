import { FC, Fragment } from "react"
import { Outlet } from "react-router-dom"

import { Box, Stack } from "@mui/material"
import { Header } from "./Header"
import { Provider } from "react-redux"
import store from "../../redux"

const LayoutRdx: FC = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Stack  sx={{minHeight: "100vh"}}>
          <Box component="header">
            <Header />
          </Box>
          <Box component="main">
            <Outlet />
          </Box>
        </Stack>
      </Provider>
    </Fragment>
  )
}

export { LayoutRdx }