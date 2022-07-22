import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react"

import { AmountFilterType, OpenDialogsType, TransactionType } from "../../../types"
import { useAppSelector } from "../../../hooks/rdx/hooks"
import { useMapTables } from "../../../utils/mapTable"
import CsvDownload from "react-json-to-csv"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"
import { getMaxMinAmount, getNumberFromAmount } from "../../../utils/helpers"

interface IExportDialog {
  open: OpenDialogsType
  setOpen: Dispatch<SetStateAction<OpenDialogsType>>
}

const ExportDialog: FC<IExportDialog> = ({ open, setOpen }) => {
  const { transactions } = useAppSelector(state => state.transactions)
  const [items, setItems] = useState<TransactionType[] | []>([])
  const [filteredItems, setFilteredItems] = useState<TransactionType[]>(items)
  const [typeFilter, setTypeFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")
  const [amountFilter, setAmountFilter] = useState<AmountFilterType>({from: 0, to: 100})


  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper")

  const myTable = useMapTables(transactions)
console.log(myTable)

  useEffect(() => {
    let filteredItems = [] as TransactionType[]
    items?.forEach(el => {
      const num = getNumberFromAmount(el.amount)

      if (amountFilter.from < num && num < amountFilter.to) {
console.log("hello")
        filteredItems.push(el)
      }
    })
    setFilteredItems(filteredItems)
  }, [amountFilter, items])

  useEffect(() => {
    const { from, to } = getMaxMinAmount(items)
    setAmountFilter({from, to})
  }, [items])

  useEffect(() => {
    if (myTable) {
      setItems(myTable?.get(`${typeFilter}${statusFilter}`))
    }
  }, [myTable, statusFilter, typeFilter])

console.log(items)
  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen({...open, export: false})
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen({...open, export: false})
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
        open={open.export}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              onChange={(e) => setTypeFilter(e.target.value)}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="All"
              name="radio-buttons-group"
            >
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel value="Refill" control={<Radio />} label="Refill" />
              <FormControlLabel value="Withdrawal" control={<Radio />} label="Withdrawal" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="All"
              name="radio-buttons-group"
            >
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
              <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
              <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{width: "200px"}}>
            <FormLabel sx={{marginBottom: "50px"}} id="demo-radio-buttons-group-label">Amount</FormLabel>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={[amountFilter.from, amountFilter.to]}
                onChange={(e: any) => setAmountFilter({
                  ...amountFilter,
                  from: e.target?.value[0],
                  to: e.target?.value[1]
                })}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
          </FormControl>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredItems?.map((item) => (
            <TableRow
              key={item.transactionid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{item.transactionid}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
              <TableCell align="right">{item.type}</TableCell>
              <TableCell align="right">{item.clientname}</TableCell>
              <TableCell align="right">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </DialogContent>
        <DialogActions>
          <CsvDownload data={items?.map(item => ({
            transactionid: item.transactionid,
            status: item.status,
            type: item.type,
            clientname: item.clientname,
            amount: item.amount,
          }))} />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export { ExportDialog }