import { FC } from "react"

import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import { styles } from "./styles"

const Footer: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Grid container>
        <Grid item p={1} xs={6} sm={3}>
          <Typography variant="h6">Products</Typography>
          <List>
            <ListItem sx={styles.item}>App</ListItem>
            <ListItem sx={styles.item}>Analytics</ListItem>
            <ListItem sx={styles.item}>Token List</ListItem>
            <ListItem sx={styles.item}>Defi</ListItem>
          </List>
        </Grid>
        <Grid p={1} item xs={6} sm={3}>
          <Typography variant="h6">Products</Typography>
          <List>
            <ListItem sx={styles.item}>App</ListItem>
            <ListItem sx={styles.item}>Analytics</ListItem>
            <ListItem sx={styles.item}>Token List</ListItem>
            <ListItem sx={styles.item}>Defi</ListItem>
          </List>
        </Grid>
        <Grid p={1} item xs={6} sm={3}>
          <Typography variant="h6">Products</Typography>
          <List>
            <ListItem sx={styles.item}>App</ListItem>
            <ListItem sx={styles.item}>Analytics</ListItem>
            <ListItem sx={styles.item}>Token List</ListItem>
            <ListItem sx={styles.item}>Defi</ListItem>
          </List>
        </Grid>
        <Grid p={1} item xs={6} sm={3}>
          <Typography variant="h6">Products</Typography>
          <List>
            <ListItem sx={styles.item}>App</ListItem>
            <ListItem sx={styles.item}>Analytics</ListItem>
            <ListItem sx={styles.item}>Token List</ListItem>
            <ListItem sx={styles.item}>Defi</ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export { Footer }