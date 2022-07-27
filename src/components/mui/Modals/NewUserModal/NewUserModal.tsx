import { Dispatch, FC, SetStateAction } from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Box, Button, Stack, Typography, TextField } from "@mui/material"
import { UserData, validationSchema } from "./consts"

interface INewUserModal {
  handleClose: () => void
  setUserDate: Dispatch<SetStateAction<UserData | null>>
}

const NewUserModal: FC<INewUserModal> = ({ handleClose, setUserDate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid } 
  } = useForm({ resolver: yupResolver(validationSchema) })

  const onSubmit = handleSubmit((data) => {
    setUserDate(data as UserData)
    handleClose()
  })
  return (
    <Box>
      <Typography mb={2} variant="h5">New User</Typography>
      <Typography mb={2}>Fill out inputs and hit "submit" button</Typography>
      <Stack spacing={2} mb={3}>
        <TextField
          required
          label="Full Name"
          {...register("fullName")}
          color="secondary"
          error={!!errors.fullName}
        />

        {errors?.fullName?.message &&
          <Typography color="error" variant="body2">
            {String(errors.fullName.message)}
          </Typography>
        }
        <TextField
          required
          label="Email"
          color="secondary"
          error={!!errors.email}
          {...register("email")}
        />
          {errors?.email?.message &&
            <Typography color="error" variant="body2">
              {String(errors.email.message)}
            </Typography>
          }
        <TextField
          required
          label="Phone number"
          color="secondary"
          error={!!errors.phoneNumber}
          {...register("phoneNumber")}
        />
          {errors?.phoneNumber?.message
            ? (
              <Typography color="error" variant="body2">
                {String(errors.phoneNumber.message)}
              </Typography>
            ) : (
              !isValid &&
              <Typography color="green" variant="body2">
                Enter "123" to avoid the lame error message
              </Typography>
            )
          }
      </Stack>
      <Stack direction="row" gap={2}>
        <Button onClick={handleClose} variant="contained">cancel</Button>
        <Button onClick={onSubmit} variant="contained">submit</Button>
      </Stack>
    </Box>
  )
}

export { NewUserModal }