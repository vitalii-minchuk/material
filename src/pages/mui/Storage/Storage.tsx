import { FC, useEffect, useState } from "react"

import {
  Box,
  Button,
  Slider,
  Stack
} from "@mui/material"
import { storageStyles } from "./storageStyles"
import { marks, valueText } from "./consts"

const Storage: FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 3) {
      setCount(0)
    }
  }, [count])
  return (
    <Box p={2}>
      <Stack spacing={2} direction="row" mb={3}>
        <Button variant="contained" sx={storageStyles.button}>
          add user
        </Button>
        <Button variant="outlined" color="secondary" sx={storageStyles.button}>
          add user
        </Button>
        <Button variant="text" sx={storageStyles.button}>
          add user
        </Button>
      </Stack>
      <Box sx={storageStyles.sliderBox}>
        <Slider
          getAriaLabel={() => "Temperature"}
          orientation="vertical"
          getAriaValueText={valueText}
          defaultValue={[25, 50]}
          marks={marks}
          valueLabelFormat={valueText}
          valueLabelDisplay="on"
        />
      </Box>
      <Box m={3}>
        <Button
          onClick={() => setCount(prev => prev + 1)}
          sx={[
            count === 0 && {
              backgroundColor: "red"
            },
            count === 1 && {
              border: "3px solid #000",
              padding: 5
            },
            count === 2 && {
              width: "100%"
            },
            count === 3 && {
            },
          ]}
        >
          click me
        </Button>
      </Box>
    </Box>
  )
}

export { Storage }