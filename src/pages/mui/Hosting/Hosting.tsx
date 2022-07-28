import { FC, useState } from "react"

import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material"
import { useSnackbar, VariantType } from "notistack"

const Hosting: FC = () => {
  const [message, setMessage] = useState("")
  const [variant, setVariant] = useState<VariantType>("default")
  const { enqueueSnackbar } = useSnackbar()

  const handleDefault = () => {
    enqueueSnackbar('I love snacks.')
  }

  const handleError = () => {
    enqueueSnackbar('I love snacks.', { variant: "error" })
  }

  const handleInfo = () => {
    enqueueSnackbar('I love snacks.', { variant: "info" })
  }

  const handleSuccess = () => {
    enqueueSnackbar(`'I love snacks.'`, { variant: "success" })
  }

  const handleClickVariant = () => {
    enqueueSnackbar(message, { variant })
  }

  const handleVariantChange =(evt: SelectChangeEvent) => {
    setVariant(evt.target.value as VariantType)
  }

  return (
      <Box p={2}>
        <Stack direction="row" gap={1} m={2} flexWrap="wrap">
          <Button color="inherit" onClick={handleDefault}>Default</Button>
          <Button color="error" onClick={handleError}>Error</Button>
          <Button color="primary" onClick={handleInfo}>Info</Button>
          <Button color="success" onClick={handleSuccess}>Success</Button>
        </Stack>
        <Stack direction="row" gap={1} m={2} flexWrap="wrap">
          <FormControl>
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              label="Message"
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Variant</InputLabel>
            <Select
              value={variant}
              label="Variant"
              onChange={handleVariantChange}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="success">Success</MenuItem>
              <MenuItem value="info">Info</MenuItem>
              <MenuItem value="error">Error</MenuItem>
              <MenuItem value="warning">Warning</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleClickVariant}>ok</Button>
        </Stack>
      </Box>
  )
}

export { Hosting }