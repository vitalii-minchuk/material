import { FC, useState } from "react"

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  Stack,
  Typography
} from "@mui/material"
import { styles } from "./styles"
import { MyButton } from "../MyButton/MyButton"

const Subscribe: FC = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant="h5">Join Our DeFi Community</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Input sx={styles.input} placeholder="Enter your email" />
        <MyButton>go</MyButton>
      </Stack>
      <FormControl sx={styles.checkBoxWrapper}>
        <FormControlLabel
          control={
            <Checkbox
              sx={styles.checkBox}
              checked={checked}
              onChange={() => setChecked(prev => !prev)}
            />
          }
          sx={{fontSize: "8px"}}
          label="Yes, I agree to receive email communications from DeFi"
        />
      </FormControl>
    </Box>
  )
}

export { Subscribe }