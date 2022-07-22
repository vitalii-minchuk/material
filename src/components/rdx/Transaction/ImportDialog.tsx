import { FC, forwardRef, MouseEvent } from "react"

// import { useAppDispatch } from "../../../hooks/rdx/hooks"
import { OpenDialogsType } from "../../../types"

import { 
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
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

const ImportDialog: FC<IDeleteTrDialog> = ({ setOpen, open }) => {
  // const [drag, setDrag] = useState(false)
  // const dispatch = useAppDispatch()
 
  const handleClose = (event: MouseEvent) => {

    // if (event.currentTarget.textContent === "ok") {
    //   dispatch(importData())
    // }

    setOpen({...open, import: false})
  }

  return (
    <Box p={6} width={280}>
      <Dialog
        open={open.import}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Chose .csv file to import</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box m={3} sx={{border: "2px dashed black"}}>
              {/* {drag ? (
                <Typography>Drag your file here</Typography>
              ) : (
                <Typography>Drop your file</Typography>
              )} */}
  
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose}>import</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export { ImportDialog }