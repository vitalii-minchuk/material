import { FC, Fragment } from "react"

import { Box, Container, CssBaseline } from "@mui/material"
import { styles } from "./styles"
import { Header } from "../components/main-page/Header/Header"
import { Hero } from "../components/main-page/Hero/Hero"
import { About } from "../components/main-page/About/About"

const MainPage: FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={styles.wrapper}>
        <Container maxWidth="xl">
          <Header />
          <Hero />
          <About />
        </Container>
      </Box>
    </Fragment>
  )
}

export { MainPage }