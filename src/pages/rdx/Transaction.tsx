import { FC, useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/rdx/hooks"
import { OpenDialogsType } from "../../types"
import { fetchTransactions } from "../../redux/Slices/transactionsSlice"

import { Box, Button, Container, Divider, Paper, Stack, Typography } from "@mui/material"

import { TrItem } from "../../components/rdx/Transaction/TrItem"
import { TrOptions } from "../../components/rdx/Transaction/TrOptions"
import { AddNewTrDialog } from "../../components/rdx/Transaction/AddNewTrDialog"
import { ExportDialog } from "../../components/rdx/Transaction/ExportDialog"
import { ImportDialog } from "../../components/rdx/Transaction/ImportDialog"

const tableHeader = ["ID", "Status", "Type", "Client name", "Amount", "Actions"]

const Transaction: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState<OpenDialogsType>({
    addNewTr: false,
    delTr: false,
    editTr: false,
    import: false,
    export: false
  })
  const { transactions } = useAppSelector(state => state.transactions)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTransactions()) 
  }, [dispatch])

  const importHandler = () => {
    setDialogOpen({...isDialogOpen, import: true})
  }
  const exportHandler = () => {
    setDialogOpen({...isDialogOpen, export: true})
  }

  return (
    <Container maxWidth="lg">
      <Button onClick={importHandler}>import</Button>
      <Button onClick={exportHandler}>export</Button>
      <Box my={3}>
        <Paper elevation={12} sx={{minHeight: "500px", p: "15px"}}>
          <TrOptions
            setOpen={setDialogOpen}
            open={isDialogOpen}
          />
          <Stack p={1} direction={"row"} justifyContent={"space-between"}>
            {tableHeader.map(el => (
              <Box key={el} width={150}>
                <Typography variant="subtitle1">{el}</Typography>
              </Box>
            ))}
          </Stack>
          <Divider />
          {transactions?.map((el) => {
            return <TrItem
              key={el.transactionid}
              transaction={{...el}}
              setOpen={setDialogOpen}
              open={isDialogOpen}
            />
          })}
          
{/* 
          <Stack sx={{marginTop: "auto"}}>
          </Stack> */}
        </Paper>
      </Box>
      <AddNewTrDialog setOpen={setDialogOpen} open={isDialogOpen} />
      <ExportDialog  setOpen={setDialogOpen} open={isDialogOpen}  />
      <ImportDialog setOpen={setDialogOpen} open={isDialogOpen} />
    </Container>
  )
}

export { Transaction }