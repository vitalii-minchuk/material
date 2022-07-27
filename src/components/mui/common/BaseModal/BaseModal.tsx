import { Dispatch, FC, Fragment, ReactNode, SetStateAction } from "react"

import { Box, Modal } from "@mui/material"
import { style } from "./styles"

interface IBaseModal {
  open: boolean
  handleClose: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

const BaseModal: FC<IBaseModal> = ({ children, handleClose, open }) => {
  return (
    <Fragment>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </Fragment>
  )
}

export { BaseModal }