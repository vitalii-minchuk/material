import { FC, Fragment } from "react"
import { Outlet } from "react-router-dom"

import { Box, Stack } from "@mui/material"
import { Header } from "./Header"

const LayoutFormik: FC = () => {
  return (
    <Fragment>
        <Stack  sx={{minHeight: "100vh"}}>
          <Box>
            <Header />
          </Box>
          <Box>
            <Outlet />
          </Box>
        </Stack>
    </Fragment>
  )
}

export { LayoutFormik }