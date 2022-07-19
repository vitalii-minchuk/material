import { 
  Dispatch,
  FC,
  forwardRef,
  Fragment,
  MouseEvent,
  SetStateAction,
  useState,
} from "react"

import { useAppDispatch, useAppSelector } from "../../../hooks/rdx/hooks"
import { addTransaction } from "../../../redux/transactionsSlice"
import { OpenDialogsType, TransactionType } from "../../../types"

import { TransitionProps } from "@mui/material/transitions"
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  Stack,
  TextField
} from "@mui/material"
import { getOrderNumber } from "../../../helpers"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface IAddNewTrDialog {
  open: OpenDialogsType
  setOpen: Dispatch<SetStateAction<OpenDialogsType>>
}

const AddNewTrDialog: FC<IAddNewTrDialog> = ({ open, setOpen }) => {
  const transactions = useAppSelector(state => state.transactions.transactions)
  const dispatch = useAppDispatch()

  const [newTransaction, setNewTransaction] = useState<TransactionType>({
    transactionid: "1",
    status: "Pending",
    type: "Refill",
    clientname: "Boris",
    amount: "11"
  })

  const currentId = getOrderNumber(transactions)

  const handleClose = (event: MouseEvent): void => {

    if (event.currentTarget.textContent === "ok") {
      dispatch(addTransaction({...newTransaction, transactionid: currentId}))

    }

    setOpen({...open, addNewTr: false})
  }

  return (
    <Fragment>
      <Dialog
        open={open.addNewTr}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>new transaction</DialogTitle>
        <DialogContent>
          <Stack gap={2}>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
              <InputLabel id="type">Type</InputLabel>
              <Select
                labelId="type"
                id="type"
                value={newTransaction?.type}
                label="Type"
                onChange={(e) => setNewTransaction({
                ...newTransaction, type: e.target.value})}
              >
                <MenuItem value={"Withdrawal"}>Withdrawal</MenuItem>
                <MenuItem value={"Refill"}>Refill</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
              <InputLabel id="type">Status</InputLabel>
                <Select
                  labelId="status"
                  id="status"
                  value={newTransaction?.status}
                  label="Status"
                  onChange={(e) => setNewTransaction({
                    ...newTransaction, status: e.target.value})}
                >
                  <MenuItem value={"Pending"}>Pending</MenuItem>
                  <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
                  <MenuItem value={"Completed"}>Completed</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
              <TextField 
                id="clientname"
                label="Client Name" 
                variant="outlined"
                onChange={(e) => setNewTransaction({
                ...newTransaction, clientname: e.target.value})}
                value={newTransaction?.clientname}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
            <TextField
              onChange={(e) => setNewTransaction({
                ...newTransaction, amount: e.target.value})}
              value={newTransaction?.amount}
              label="Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button value="cancel" onClick={(e) => handleClose(e)}>cancel</Button>
          <Button value="ok" onClick={(e) => handleClose(e)}>ok</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export { AddNewTrDialog }