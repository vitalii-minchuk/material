import { FC } from "react"
import { Outlet } from "react-router-dom"

import {
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material"
import { theme } from "../../globalTheme"

import { Navbar } from "./Navbar/Navbar"
// import { Header } from "./Header/Header"


const LayoutMUI: FC = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item xs={12} ml={{xs: "35px", sm: "220px"}}>
          {/* <Header /> */}
          <Outlet />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export { LayoutMUI }