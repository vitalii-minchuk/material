import { FC, useState } from "react"

import { Box, Button, Stack, Typography } from "@mui/material"

import { UserData } from "../../../components/mui/Modals/NewUserModal/consts"
import { BaseCard } from "../../../components/mui/common/BaseCard/BaseCard"
import { BaseModal } from "../../../components/mui/common/BaseModal/BaseModal"
import { NewUserModal } from "../../../components/mui/Modals/NewUserModal/NewUserModal"

const Database: FC = () => {
  const [userData, setUserDate] = useState<UserData | null>(null)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const getCardHeader = () => {
    return (
      <Box p={1} sx={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
        <Typography variant="h5">{`Hello, ${userData?.fullName}`}</Typography>
      </Box>
    )
  }

  const getCardContent = () => {
    return (
      <Stack gap={2}>
        <Stack
          direction="row" alignItems="end" justifyContent="space-between" flexWrap="wrap">
          <Typography variant="subtitle1">Email</Typography>
          <Typography variant="body1">{userData?.email}</Typography>
        </Stack>
        <Stack direction="row" alignItems="end" justifyContent="space-between">
          <Typography variant="subtitle1">Phone</Typography>
          <Typography variant="body1">{userData?.phoneNumber}</Typography>
        </Stack>
      </Stack>
    )
  }

  return (
    <Box p={2}>
      <Button onClick={handleOpen}>Open modal</Button>
      {userData?.fullName &&
        <BaseCard header={getCardHeader()} content={getCardContent()} />
      }
      <BaseModal
        open={open}
        handleClose={handleClose}
        children={<NewUserModal handleClose={handleClose} setUserDate={setUserDate} />}
      />
    </Box>
  )
}

export { Database }