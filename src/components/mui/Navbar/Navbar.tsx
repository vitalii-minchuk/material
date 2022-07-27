import { FC, Fragment } from "react"
import { useNavigate } from "react-router-dom"

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"

import { navbarMenuItems } from "./consts"
import { navbarStyles } from "./navbarStyles"

const Navbar: FC = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
       <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <List>
         <ListItem disablePadding>
          <ListItemButton sx={navbarStyles.button} onClick={() => navigate("/mui")}>
            <ListItemIcon sx={navbarStyles.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              sx={navbarStyles.text}
              primary="Home"
            />
          </ListItemButton>
         </ListItem>
        </List>
        <Divider color="gray" />
        <List>
          {navbarMenuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton sx={navbarStyles.button} onClick={() => navigate(item.route)}>
                <ListItemIcon sx={navbarStyles.icon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  )
}

export { Navbar }