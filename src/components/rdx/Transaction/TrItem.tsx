import { Dispatch, FC, Fragment, SetStateAction } from "react"

import { OpenDialogsType, TransactionType } from "../../../types"
import { useAppDispatch } from "../../../hooks/rdx/hooks"
import { setCurrentTr } from "../../../redux/transactionsSlice"

import { Box, Button, Stack, Tooltip, Typography } from "@mui/material"
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined"
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined"

import { DeleteTrDialog } from "./DeleteTrDialog"
import { EditTrDialog } from "./EditTrDialog"

interface ITrItem {
  transaction: TransactionType
  setOpen: Dispatch<SetStateAction<OpenDialogsType>>
  open: OpenDialogsType
}

const TrItem: FC<ITrItem> = ({ transaction, open, setOpen }) => {
  const dispatch = useAppDispatch()

  const handleDeleteTr = () => {
    dispatch(setCurrentTr(transaction))
    setOpen({...open, delTr: true})
  }

  const handleEdit = () => {
    dispatch(setCurrentTr(transaction))
    setOpen({...open, editTr: true})
  }

  return (
    <Fragment>
      <Stack p={1} direction={"row"} justifyContent={"space-between"}>
        <Box width={150}>
          <Typography variant="subtitle1">{transaction.transactionid}</Typography>
        </Box>
        <Box width={150}>
          <Typography variant="subtitle1">{transaction.status}</Typography>
        </Box>
        <Box width={150}>
          <Typography variant="subtitle1">{transaction.type}</Typography>
        </Box>
        <Box width={150}>
          <Typography variant="subtitle1">{transaction.clientname}</Typography>
        </Box>
        <Box width={150}>
          <Typography variant="subtitle1">{transaction.amount}</Typography>
        </Box>
        <Box>
          <Button onClick={handleEdit}>
            <Tooltip title="edit">
              <ModeEditOutlinedIcon />
            </Tooltip>
          </Button>
          <Button onClick={handleDeleteTr}>
            <Tooltip title="delete">
              <DeleteSweepOutlinedIcon />
            </Tooltip>
          </Button>
        </Box>
      </Stack>
      <DeleteTrDialog setOpen={setOpen} open={open} />
      <EditTrDialog setOpen={setOpen} open={open} />
    </Fragment>
  )
}

export { TrItem }

