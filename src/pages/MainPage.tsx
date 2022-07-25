import { FC } from "react"
import { Link } from "react-router-dom"

import { Stack, Typography } from "@mui/material"

const MainPage: FC = () => {
  return (
    <div>
      <Typography variant="h4">MainPage</Typography>
      <Stack>
      <Link to="/routing">routing</Link>
      <Link to="/redux">redux</Link>
      <Link to="/formik">formik</Link>

      </Stack>
    </div>
  )
}

export { MainPage }