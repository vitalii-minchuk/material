import { FC } from "react"

import { Box, Stack, Typography } from "@mui/material"
import { styles } from "./styles"
import video from "../../../assets/video.mp4"
import { MyButton } from "../MyButton/MyButton"
import { MyButton1 } from "../MyButton1/MyButton1"

const Hero: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <video style={styles.video} src={video} autoPlay loop muted></video>
      <Stack sx={styles.content}>
        <Box pb={2}>
          <Typography sx={styles.title}>Decentralized</Typography>
          <Typography sx={styles.titleSpan}>Trading Protocol</Typography>
        </Box>
        <Box pb={2}>
          <Typography>
            Guaranteed liquidity trading for millions of users and top Ethereum applications.
          </Typography>
        </Box>
        <Stack direction="row" gap={3} justifyContent="center">
          <MyButton>View Code</MyButton>
          <MyButton1>FAQ</MyButton1>
        </Stack>
      </Stack>
      <Box sx={styles.footer}>
        <Typography variant="subtitle1">
          Total Volume Secured: $42,104,783,662.47
        </Typography>
      </Box>
    </Box>
  )
}

export { Hero }