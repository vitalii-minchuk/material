import { FC } from "react"

import { useFormik } from "formik"
import { object, ref, string } from "yup"

import {
  Button,
  Box,
  Card,
  CardContent,
  Input,
  Stack,
  InputLabel,
  FormControl,
  Container,
  Typography
} from "@mui/material"

interface ILogin {
  name: string
  email: string
  password: string
  cPassword: string
}

const initialLoginValues: ILogin = {
  name: "",
  email: "",
  password: "",
  cPassword: ""
}

const regExForPassword = new RegExp(/^.{4,8}$/)


const FormikHome: FC = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialLoginValues,
    validationSchema: object({
      name: string().required().min(1).max(50),
      email: string().required().email(),
      password: string().required().matches(regExForPassword, "4 - 8 symbols"),
      cPassword: string().required().oneOf([ref("password")], "password does not match")
    }),
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm()
    },
  })
console.log(errors)
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{py: 2}}>FormikHome</Typography>
      <Container maxWidth="xs" sx={{mt: 6}}>
        <Card>
          <CardContent>
            <Stack
              spacing={2}
              component="form"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <FormControl variant="standard">
                <Box>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    fullWidth
                  />
                  {errors.name && touched.name &&
                    <Typography color="error">{errors.name}</Typography>
                  }
                </Box>
              </FormControl>
              <FormControl variant="standard">
                <Box>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    fullWidth
                  />
                  {errors.email && touched.email &&
                    <Typography color="error">{errors.email}</Typography>
                  }
                </Box>
              </FormControl>
              <FormControl variant="standard">
                <Box>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    fullWidth
                  />
                  {errors.password && touched.password &&
                    <Typography color="error">{errors.password}</Typography>
                  }
                </Box>
              </FormControl>
              <FormControl variant="standard">
                <Box>
                  <InputLabel htmlFor="cPassword">Confirm password</InputLabel>
                  <Input
                    name="cPassword"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cPassword}
                    fullWidth
                  />
                  {errors.cPassword && touched.cPassword &&
                    <Typography color="error">{errors.cPassword}</Typography>
                  }
                </Box>
              </FormControl>
              <Box pt={3}>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                >
                  submit
                </Button>
              </Box>
              </Stack>
          </CardContent>
        </Card>
      </Container>
    </Container>
  )
}

export { FormikHome }