import { FC, Fragment, useState } from "react"

import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Typography
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { styles } from "./styles"
import { MyButton } from "../MyButton/MyButton"
import { MyMenu } from "../MyMenu/MyMenu"


const Header: FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <Fragment>
      <Box sx={styles.wrapper}>
        <Box>
          <Typography sx={styles.logo}>LOGO</Typography>
        </Box>
        <Stack direction="row" alignItems="center">
          <Box sx={styles.iconsBox}>
            <IconButton onClick={handleOpen}>
              {open ? <CloseIcon sx={styles.icon} /> : <MenuIcon sx={styles.icon} />}
            </IconButton>
          </Box>
          <MyMenu sx={styles.menuList} />
          <Box ml={2}>
            <MyButton
              onClick={() => window.open("https://github.com/vitalii-minchuk/material",
              "_blank")}
            >
              view code
            </MyButton>
          </Box>
        </Stack>
      </Box>
      <Collapse in={open} sx={styles.collapse}>
        <MyMenu sx={styles.humbuggerMenuList} />
      </Collapse>
    </Fragment>
  )
}

export { Header }