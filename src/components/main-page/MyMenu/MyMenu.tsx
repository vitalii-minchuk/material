import { FC } from "react"
import { Link } from "react-router-dom"

import { List, ListItem, SxProps } from "@mui/material"

interface IMyMenu {
  sx?: SxProps
}

const MyMenu: FC<IMyMenu> = ({ ...sx }) => {
  return (
    <List {...sx}>
      <Link to="/redux">
        <ListItem>redux</ListItem>
      </Link>
      <Link to="/routing">
        <ListItem>routing</ListItem>
      </Link>
      <Link to="/formik">
        <ListItem>formik</ListItem>
      </Link>
      <Link to="/mui">
        <ListItem>mui</ListItem>
      </Link>
    </List>
  )
}

export { MyMenu }

