import { FC, Fragment } from "react"

import { Skeleton } from "@mui/material"

interface IBaseSkeleton {
  variant?:  "text" | "rectangular" | "circular"
  width?: number | string
  height?: number | string
}

const BaseSkeleton: FC<IBaseSkeleton> = ({ variant, width, height }) => {

  return (
    <Fragment>
      <Skeleton variant={variant} width={width} height={height} animation="wave" />
    </Fragment>
  )
}

export { BaseSkeleton }