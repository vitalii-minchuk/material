import { FC, forwardRef, MouseEvent } from "react"

import { useAppDispatch, useAppSelector } from "../../../hooks/rdx/hooks"
import { removeTransaction } from "../../../redux/Slices/transactionsSlice"
import { OpenDialogsType } from "../../../types"

import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface IDeleteTrDialog {
  setOpen: React.Dispatch<React.SetStateAction<OpenDialogsType>>
  open: OpenDialogsType
}

const DeleteTrDialog: FC<IDeleteTrDialog> = ({ setOpen, open }) => {
  const { currentTr } = useAppSelector(state => state.transactions)
  const dispatch = useAppDispatch()
 
  const handleClose = (event: MouseEvent) => {

    if (event.currentTarget.textContent === "ok") {

      if (currentTr?.transactionid) {
        dispatch(removeTransaction(currentTr.transactionid))
      }
    }

    setOpen({...open, delTr: false})
  }

  return (
    <div>
      <Dialog
        open={open.delTr}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>transaction #{currentTr?.transactionid}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Would you like to remove this transaction from the table ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export { DeleteTrDialog }