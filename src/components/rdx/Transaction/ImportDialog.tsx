import { FC, forwardRef, MouseEvent } from "react"

import { useAppDispatch, useAppSelector } from "../../../hooks/rdx/hooks"
import { removeTransaction } from "../../../redux/Slices/transactionsSlice"
import { OpenDialogsType, TransactionType } from "../../../types"
import CSVReader from "react-csv-reader"

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
import { downloadData, importData } from "../../../redux/Slices/importDataSlice"

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header: string) =>
    header
      .toLowerCase()
      .replace(/\W/g, '_')
}

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



const ImportDialog: FC<IDeleteTrDialog> = ({ setOpen, open }) => {
  const dispatch = useAppDispatch()
  const handleForce = (data: TransactionType[]) => dispatch(downloadData((data)))
 
  const handleClose = (event: MouseEvent) => {

    if (event.currentTarget.textContent === "ok") {
      dispatch(importData())
      // if (currentTr?.transactionid) {
      //   dispatch(removeTransaction(currentTr.transactionid))
      // }
    }

    setOpen({...open, import: false})
  }

  return (
    <div>

      <Dialog
        open={open.import}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >          
      
      <CSVReader
            cssClass="csv-input"
            onFileLoaded={handleForce}
            parserOptions={papaparseOptions}
          />
        <DialogTitle>transaction </DialogTitle>
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

export { ImportDialog }