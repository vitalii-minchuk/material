import { FC } from "react"

import { Box } from "@mui/material"
import { styles } from "./styles"
import video from "../../../assets/video.mp4"

const Hero: FC = () => {
  return (
    <Box>
      <video style={styles.video} src={video} autoPlay loop muted></video>
    </Box>
  )
}

export { Hero }