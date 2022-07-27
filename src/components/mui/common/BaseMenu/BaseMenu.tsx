import { Dispatch, FC, SetStateAction } from "react"

import { Menu, MenuItem } from "@mui/material"
import { notifications } from "../../NotificationBell/consts"

interface IBaseMenu {
  anchorEl: null | HTMLElement
  setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>
  items: typeof notifications
}

const BaseMenu: FC<IBaseMenu> = ({ anchorEl, setAnchorEl, items }) => {
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {items.map(item => (
        <MenuItem key={item.id} onClick={handleClose}>{item.notification}</MenuItem>
      ))}
    </Menu>
  )
}

export { BaseMenu }