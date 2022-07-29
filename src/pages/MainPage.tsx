import { FC, Fragment } from "react"

import { Box, Container, CssBaseline } from "@mui/material"
import { styles } from "./styles"
import { Header } from "../components/main-page/Header/Header"
import { Hero } from "../components/main-page/Hero/Hero"
import { About } from "../components/main-page/About/About"
import { Developers } from "../components/main-page/Developers/Developers"
import { Subscribe } from "../components/main-page/Subscribe/Subscribe "
import { Footer } from "../components/main-page/Footer/Footer"

const MainPage: FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={styles.wrapper}>
        <Container maxWidth="xl">
          <Header />
          <Hero />
          <About />
          <Developers />
          <Subscribe />
          <Footer />
        </Container>
      </Box>
    </Fragment>
  )
}

export { MainPage }