import { FC, Fragment, MouseEvent, useState } from "react"

import {
  Badge,
  IconButton,
  Tooltip,
} from "@mui/material"
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded"
import { emptyMassage, message, notifications } from "./consts"
import { BaseMenu } from "../common/BaseMenu/BaseMenu"

const NotificationBell: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const badgeContent = notifications?.length
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    if (badgeContent) {
      setAnchorEl(event.currentTarget)
    }
  }

  return (
    <Fragment>
      <Tooltip title={badgeContent ? message(badgeContent) : emptyMassage}>
        <IconButton onClick={handleOpen}>
          <Badge badgeContent={badgeContent} color="error">
            <NotificationsRoundedIcon fontSize="medium" color="info" />
          </Badge>
        </IconButton>
      </Tooltip>
      <BaseMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} items={notifications} />
    </Fragment>
  )
}

export { NotificationBell }