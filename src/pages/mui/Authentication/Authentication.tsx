import { ChangeEvent, FC } from "react"

import {
  Box,
  Button,
  Grid,
  Stack,
  Typography
} from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"
import { styles } from "./styles"
import { SearchBar } from "../../../components/mui/common/SearchBar/SearchBar"
import { BaseCard } from "../../../components/mui/common/BaseCard/BaseCard"


const Authentication: FC = () => {
  const getCardHeader = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log(e.target.value)
    }

    return (
      <Stack
        sx={styles.cardHeaderWrapper}
        p={1}
        direction="row"
        flexWrap="wrap"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <SearchBar placeholder="Search ..." onChange={handleChange} />
        <Stack direction="row" spacing={3} alignItems="center" >
          <Button size="small" variant="contained">Add user</Button>
          <RefreshIcon />
        </Stack>
      </Stack>
    )
  }

  const getCardContent = () => {
    return (
      <Grid container sx={styles.cardContentBox}>
        <Grid item>
          <Typography align="center">No users for this project yet</Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Box my={3} mx={4}>
      <BaseCard header={getCardHeader()} content={getCardContent()} />
    </Box>
  )
}

export { Authentication }