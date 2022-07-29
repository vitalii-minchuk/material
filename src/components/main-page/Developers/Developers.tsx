import { FC } from "react"

import { Box, Typography } from "@mui/material"
import terminal from "../../../assets/terminal.png"
import { styles } from "./styles"

const Developers: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant="h5">Superpowers for DEFI developers.</Typography>
      <Typography sx={styles.text} variant="subtitle1">
        Checkout the 
        <span style={styles.textSpan}> documentation </span>
        , the 
        <span style={styles.textSpan}> quick start </span>
        or a guide below to integrate your project with thousands of tokens and billions of liquidity.  
      </Typography>
      <Box sx={styles.imgBox}>
        <img style={styles.img} src={terminal} alt="terminal" />
      </Box>
    </Box>
  )
}

export { Developers }