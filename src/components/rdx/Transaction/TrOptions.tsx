import { Dispatch, FC, SetStateAction } from "react"

import { Button, Stack, Box } from "@mui/material"
import { OpenDialogsType } from "../../../types"

interface ITrOptions {
  open: OpenDialogsType
  setOpen: Dispatch<SetStateAction<OpenDialogsType>>
}

const TrOptions: FC<ITrOptions> = ({ setOpen, open}) => {

  return (
    <Stack p={1} direction="row" justifyContent="space-between">
      <Stack>filters</Stack>
      <Box mr={"auto"}>
        <Button onClick={() => setOpen({...open, addNewTr: true})}>+ add new</Button>
      </Box>
    </Stack>
  )
}

export default TrOptions