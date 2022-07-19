import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { OpenDialogsType } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks/rdx/hooks';
import { removeTransaction } from '../../../redux/transactionsSlice';

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

interface IDeleteTrDialog {
  setOpen: React.Dispatch<React.SetStateAction<OpenDialogsType>>
  open: OpenDialogsType
}
export default function DeleteTrDialog({setOpen, open,}:IDeleteTrDialog) {
  const { currentTr } = useAppSelector(state => state.transactions)
  const dispatch = useAppDispatch()
console.log(currentTr)  
  const handleClose = () => {
    if (currentTr?.transactionid) {
      dispatch(removeTransaction(currentTr.transactionid))
    }
    setOpen({...open, delTr: false})
  }

  return (
    <div>
      <Modal
        open={open.delTr}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose}>
            ok
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
