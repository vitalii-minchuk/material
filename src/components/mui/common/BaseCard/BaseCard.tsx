import { FC, ReactNode } from "react"

import {
  Card,
  CardContent,
} from "@mui/material"

interface IBaseCard {
  header?: ReactNode
  content?: ReactNode
}

const BaseCard: FC<IBaseCard> = ({ header, content }) => {
  return (
    <Card sx={{ minWidth: 220 }}>
      {header}
      <CardContent>
        {content}
      </CardContent>
    </Card>
  )
}

export { BaseCard }