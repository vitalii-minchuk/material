import { 
  Dispatch,
  FC,
  forwardRef,
  Fragment,
  MouseEvent,
  SetStateAction,
} from "react"

import { useAppDispatch } from "../../../hooks/rdx/hooks"
import { toggleStatus } from "../../../redux/transactionsSlice"
import { OpenDialogsType, TransactionType } from "../../../types"

import { TransitionProps } from "@mui/material/transitions"
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material"
import { CloseSharp } from "@mui/icons-material"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const possibleStatus= ["Pending", "Completed", "Cancelled"]

interface IDeleteTrDialog {
  transaction: TransactionType
  open: OpenDialogsType
  setOpen: Dispatch<SetStateAction<OpenDialogsType>>
}

const EditTrDialog: FC<IDeleteTrDialog> = ({ transaction, open, setOpen }) => {
  const dispatch = useAppDispatch()
  const currentStatus = possibleStatus.filter(el => el === transaction.status)
  const statusOptions = possibleStatus.filter(el => el !== transaction.status)
console.log(transaction)
  const handleClose = (event: MouseEvent): void => {

    if (event.currentTarget.textContent === "Pending") {
      dispatch(toggleStatus({...transaction, status: "Pending"}))
    } else if (event.currentTarget.textContent === "Completed") {
      dispatch(toggleStatus({...transaction, status: "Completed"}))
    } else {
      dispatch(toggleStatus({...transaction, status: "Cancelled"}))
    }
 
    setOpen({...open, editTr: false})
  }

  return (
    <Fragment>
      <Dialog
        open={open.editTr}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <CloseSharp onClick={() => setOpen({...open, editTr: false})} />
        <DialogTitle>transaction #{transaction.transactionid}</DialogTitle>
        <DialogContent>
          <Stack gap={2}>
            

{transaction.clientname}
            Would you like to change current status {currentStatus}?
          </Stack>
        </DialogContent>
        <DialogActions>
          {statusOptions?.map(el => (
            <Button key={el} value="el" onClick={(e) => handleClose(e)}>{el}</Button>
          ))}
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export { EditTrDialog }