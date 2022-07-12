import Box from "@mui/material/Box"
import { FC, ReactNode } from "react"

interface IWrapper {
  children: ReactNode
  bg: string
  color: string
}

export const Wrapper: FC<IWrapper> = ({ children, bg, color }) => {
  return (
    <Box component="div"
    sx={{width: "100%", backgroundColor: bg, color: color}}>
      {children}
    </Box>
  )
}