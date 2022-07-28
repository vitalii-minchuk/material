import { FC } from "react"
import { Outlet } from "react-router-dom"

import {
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material"
import { theme } from "../../globalTheme"

import { Navbar } from "./Navbar/Navbar"
import { Header } from "./Header/Header"
import { SnackbarProvider } from "notistack"


const LayoutMUI: FC = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2500}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <CssBaseline />
        <Grid container>
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item xs={12} ml={{xs: "35px", sm: "220px"}}>
            <Header />
            <Outlet />
          </Grid>
        </Grid>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export { LayoutMUI }