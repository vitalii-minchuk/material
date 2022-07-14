import { FC, ReactNode } from "react"

import { Box } from "@mui/material"

interface IWrapper {
  children: ReactNode
  bg: string
  color: string
}

const Wrapper: FC<IWrapper> = ({ children, bg, color }) => {
  return (
    <Box component="div"
    sx={{width: "100%", backgroundColor: bg, color: color}}>
      {children}
    </Box>
  )
}

export { Wrapper }