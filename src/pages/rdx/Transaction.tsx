import { FC, useState } from "react"

import { useAppSelector } from "../../hooks/rdx/hooks"

import { Box, Container, Divider, Paper, Stack, Typography } from "@mui/material"

import TrItem from "../../components/rdx/Transaction/TrItem"
import TrOptions from "../../components/rdx/Transaction/TrOptions"
import { AddNewTrDialog } from "../../components/rdx/Transaction/AddNewTrDialog"
import { OpenDialogsType } from "../../types"

const tableHeader = ["ID", "Status", "Type", "Client name", "Amount", "Actions"]

const Transaction: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState<OpenDialogsType>({
    addNewTr: false,
    delTr: false,
    editTr: false
  })

  const transactions = useAppSelector(state => state.transactions.transactions)
console.log(transactions)
  return (
    <Container maxWidth="lg">
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
          

          <Stack sx={{marginTop: "auto"}}>
            ttt
          </Stack>
        </Paper>
      </Box>
      <AddNewTrDialog setOpen={setDialogOpen} open={isDialogOpen} />
    </Container>
  )
}

export { Transaction }