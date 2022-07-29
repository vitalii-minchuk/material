import { FC } from "react"

import { Box, Grid, Typography } from "@mui/material"
import HubOutlinedIcon from "@mui/icons-material/HubOutlined"
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined"
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined"
import VpnLockOutlinedIcon from "@mui/icons-material/VpnLockOutlined"
import { styles } from "./styles"

const About: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant="h5">A Growing Protocol Ecosystem</Typography>
      <Typography sx={styles.text} variant="subtitle1">
        The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.
      </Typography>
      <Grid container>
        <Grid p={1} item xs={12} sm={6} lg={3}>
          <Box p={2} sx={styles.card}>
            <Box sx={styles.icon}>
              <HubOutlinedIcon />
            </Box>
            <Typography mb="auto" variant="subtitle2">Reliable, tamper-proof network</Typography>
            <Typography variant="body2">
              Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.
            </Typography>
          </Box>
        </Grid>
        <Grid p={1} item xs={12} sm={6} lg={3}>
          <Box p={2} sx={styles.card}>
            <Box sx={styles.icon}>
              <WebhookOutlinedIcon />
            </Box>
            <Typography mb="auto" variant="subtitle2">Seamless connection to any API</Typography>
            <Typography variant="body2">
              Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.
            </Typography>
          </Box>
        </Grid>
        <Grid p={1} item xs={12} sm={6} lg={3}>
          <Box p={2} sx={styles.card}>
            <Box sx={styles.icon}>
              <EmojiObjectsOutlinedIcon />
            </Box>
            <Typography mb="auto" variant="subtitle2">Proven, ready-made solutions</Typography>
            <Typography variant="body2">
              Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.
            </Typography>
          </Box>
        </Grid>
        <Grid p={1} item xs={12} sm={6} lg={3}>
          <Box p={2} sx={styles.card}>
            <Box sx={styles.icon}>
              <VpnLockOutlinedIcon />
            </Box>
            <Typography mb="auto" variant="subtitle2">Secure off-chain computation</Typography>
            <Typography variant="body2">
              Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export { About }