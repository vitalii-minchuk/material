import { 
  Dispatch,
  FC,
  forwardRef,
  Fragment,
  MouseEvent,
  SetStateAction,
} from "react"

import { useAppDispatch, useAppSelector } from "../../../hooks/rdx/hooks"
import { setCurrentTr, toggleStatus } from "../../../redux/transactionsSlice"
import { OpenDialogsType } from "../../../types"

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
  open: OpenDialogsType
  setOpen: Dispatch<SetStateAction<OpenDialogsType>>
}

const EditTrDialog: FC<IDeleteTrDialog> = ({ open, setOpen }) => {
  const dispatch = useAppDispatch()
  const { currentTr } = useAppSelector(state => state.transactions)
  const currentStatus = possibleStatus.filter(el => el === currentTr?.status)
  const statusOptions = possibleStatus.filter(el => el !== currentTr?.status)

  const handleClose = (event: MouseEvent): void => {

    if (currentTr) {
      if (event.currentTarget.textContent === "Pending") {
        dispatch(setCurrentTr({...currentTr, status: "Pending"}))
        dispatch(toggleStatus({...currentTr, status: "Pending"}))
      } else if (event.currentTarget.textContent === "Completed") {
        dispatch(setCurrentTr({...currentTr, status: "Completed"}))
        dispatch(toggleStatus({...currentTr, status: "Completed"}))
      } else {
        dispatch(setCurrentTr({...currentTr, status: "Cancelled"}))
        dispatch(toggleStatus({...currentTr, status: "Cancelled"}))
      }
    }

    setOpen({...open, editTr: false})
  }

  return (
    <Fragment>
      <Dialog
        open={open.editTr}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <CloseSharp sx={{marginLeft: "auto", p: "5px", cursor: "pointer"}}
          onClick={() => setOpen({...open, editTr: false})}
        />
        <DialogTitle>transaction #{currentTr?.transactionid}</DialogTitle>
        <DialogContent>
          <Stack gap={2}>
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