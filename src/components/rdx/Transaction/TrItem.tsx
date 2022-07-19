import { Dispatch, FC, Fragment, SetStateAction } from "react"

import { OpenDialogsType, TransactionType } from "../../../types"

import { Box, Button, Stack, Typography } from "@mui/material"

import DeleteTrDialog from "./DeleteTrDialog"
import { EditTrDialog } from "./EditTrDialog"
import { useAppDispatch } from "../../../hooks/rdx/hooks"
import { removeTransaction, setCurrentTr } from "../../../redux/transactionsSlice"
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: "5px",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

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
          <Button onClick={() => setOpen({...open, editTr: true})}>edit</Button>
          <Button onClick={handleDeleteTr}>delete</Button>
        </Box>
      </Stack>
      <DeleteTrDialog setOpen={setOpen} open={open} />
      <EditTrDialog setOpen={setOpen} open={open} transaction={transaction} />
    </Fragment>
  )
}

export default TrItem

