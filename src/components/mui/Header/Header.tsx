import { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import {
  Avatar,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material"
import HelpIcon from "@mui/icons-material/Help"
import { NotificationBell } from "../NotificationBell/NotificationBell"
import { headerStyles } from "./headerStyles"
import avatar from "../../../images/photo1.jpg"

const Header: FC = () => {
  const [title, setTitle] = useState("")
  const location = useLocation()

  useEffect(() => {
    const title = location.pathname.replace(/\W/g, " ")
    setTitle(title)
  }, [location])

  return (
    <Stack sx={headerStyles.wrapper}>
      <Stack direction="row" justifyContent="end" spacing={1} mb={2}>
        <Button variant="text" size="small" sx={headerStyles.button}>Go to docs</Button>
        <NotificationBell />
        <Avatar alt="Cindy Baker" src={avatar} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography sx={headerStyles.title} mr="auto">{title}</Typography>
        <Button variant="outlined" size="small" sx={headerStyles.button}>Web setup</Button>
        <Tooltip title="help">
          <IconButton>
            <HelpIcon color="info" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  )
}

export { Header }