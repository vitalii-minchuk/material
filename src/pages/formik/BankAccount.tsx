import { FC } from "react"

import { InvestmentDetails } from "../../types"
import { Formik, Form, Field, useField, ErrorMessage } from "formik"
import { array, boolean, mixed, number, object, string } from "yup"

import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  CheckboxProps,
  FormGroup,
  Stack,
  Button,
  Container,
} from "@mui/material"
import { pink } from "@mui/material/colors"

const initialValues: InvestmentDetails = {
  fullName: "",
  initialInvestment: "",
  investmentRisk: [],
  commentAboutInvestmentRisk: "",
  dependents: -1,
  acceptedTermsAndConditions: false
}

const dependentsOptions = [0, 1, 2, 3, 4, 5]

const BankAccount: FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{py: 2}}>FormikHome</Typography>
      <Card>
        <CardContent>
          <Typography variant="h4">New Account</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={
              object({
                fullName: string().required("your name is required").min(3).max(70),
                initialInvestment: number().required().min(100),
                dependents: number().min(0).max(5),
                acceptedTermsAndConditions: boolean().oneOf([true]),
                investmentRisk: array(string().oneOf(["High", "Medium", "Low"])).min(1),
                commentAboutInvestmentRisk: mixed().when("investmentRisk", {
                  is: (investmentRisk: string[]) => investmentRisk.find(el => el ==="High"),
                  then: string().required().min(50).max(2000),
                  otherwise: string().min(50).max(2000)
                })
              })
            }
            onSubmit={(values, formikHelpers) => {
              console.log(values)
              console.log(formikHelpers)
              return new Promise(res => {
                setTimeout(res, 2000)
              })
            }}
          >
            {({ values, errors, isSubmitting, isValidating }) => (
              <Form autoComplete="off">
                <Stack direction="row" gap={8}>
                  <FormGroup sx={{py: 1}}>
                    <Field name="fullName" as={TextField} label="Full name" variant="standard" />
                    <ErrorMessage name="fullName">
                      {msg => <Typography color="coral" variant="body2">{msg}</Typography>}
                    </ErrorMessage>
                  </FormGroup>
                  <FormGroup sx={{py: 1}}>
                    <Field
                      name="initialInvestment"
                      as={TextField}
                      type="number"
                      label="Initial investment"
                      variant="standard"
                    />
                    <ErrorMessage name="initialInvestment">
                      {msg => <Typography color="coral" variant="body2">{msg}</Typography>}
                    </ErrorMessage>
                  </FormGroup>
                </Stack>
                <Stack direction="row" gap={8}>
                  <FormGroup sx={{py: 1}}>
                    <Typography>Select the risk you want to take</Typography>
                    <MyCheckbox label="High - very risky" name="investmentRisk" value="High" />
                    <MyCheckbox label="Medium - risky" name="investmentRisk" value="Medium" />
                    <MyCheckbox label="Low - safe" name="investmentRisk" value="Low" />
                    <ErrorMessage name="investmentRisk">
                      {msg => <Typography color="coral" variant="body2">{msg}</Typography>}
                    </ErrorMessage>
                  </FormGroup>
                  <FormGroup sx={{py: 1, minWidth: 100}}>
                    <Field
                      name="dependents"
                      as={TextField}
                      select 
                      variant="standard"
                      label="Dependents"
                    >
                      <MenuItem  value={-1}>Select...</MenuItem>
                      {dependentsOptions.map(num => (
                        <MenuItem key={num} value={num}>{num}</MenuItem>
                      ))}
                    </Field>
                    <ErrorMessage name="dependents">
                      {msg => <Typography color="coral" variant="body2">{msg}</Typography>}
                    </ErrorMessage>
                  </FormGroup>
                </Stack>
                <FormGroup sx={{py: 1}}>
                  <Field
                    name="commentAboutInvestmentRisk"
                    as={TextField}
                    label="Comment about investment risks"
                    multiline
                    variant="standard"
                    rows={5}
                    // maxRows={9}
                  />
                  <ErrorMessage name="commentAboutInvestmentRisk">
                    {msg => <Typography color="coral" variant="body2">{msg}</Typography>}
                  </ErrorMessage>
                </FormGroup>
                <Stack direction="row" gap={8} alignItems="center">
                  <FormGroup sx={{py: 1}}>
                    <MyCheckbox
                        name="acceptedTermsAndConditions"
                        label="Accepted terms and conditions"
                      />
                    <ErrorMessage name="acceptedTermsAndConditions">
                      {msg => <Typography color="coral" variant="body2">{msg}</Typography>}
                    </ErrorMessage>
                  </FormGroup>
                  <Button
                    disabled={isSubmitting || isValidating}
                    sx={{height: "40px"}}
                    type="submit"
                    size="small" 
                    variant="contained"
                  >
                    submit
                  </Button>
                </Stack>
                <pre>{JSON.stringify(errors, null, 4)}</pre>
                <pre>{JSON.stringify(values, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

interface IMyCheckboxProps extends CheckboxProps {
  name: string
  label?: string
  value?: string | number
}

const MyCheckbox: FC<IMyCheckboxProps> = (props) => {
  const [field] = useField({
    name: props.name,
    type: "checkbox",
    value: props.value
  })
  return (
    <FormControlLabel
      control={<Checkbox
        {...props}
        {...field}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          }
        }}
      />}
      label={props.label}
    />
  )

}

export  { BankAccount }