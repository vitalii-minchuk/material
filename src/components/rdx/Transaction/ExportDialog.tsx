import { FC, useEffect, useRef, useState } from "react"

// import CsvDownload from "react-json-to-csv"

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle
} from "@mui/material"

const ExportDialog: FC = () => {

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper")

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>
      <Button onClick={handleClickOpen("body")}>scroll=body</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
        <Box>
            {/* <CsvDownload data={items?.map(item => ({
              transactionid: item.transactionid,
              status: item.status,
              type: item.type,
              clientname: item.clientname,
              amount: item.amount,
            }))} /> */}

            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export { ExportDialog }