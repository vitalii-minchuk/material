import { FC, Fragment } from "react"
import { useParams } from "react-router-dom"

import Typography from "@mui/material/Typography"

const EditPost: FC = () => {
  const { id } =useParams()

  return (
    <Fragment>
      <Typography variant="h4" component="h6">Edit post: #{id}</Typography>
    </Fragment>
  )
}

export default EditPost