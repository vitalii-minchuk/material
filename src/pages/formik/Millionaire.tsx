import { Children, FC, ReactElement, ReactNode, useState } from "react"

import { Field, Form, Formik, FormikConfig, FormikValues, useFormikContext } from "formik"
import { CheckboxWithLabel, TextField } from "formik-mui"
import { mixed, number, object, string } from "yup"

import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Container,
} from "@mui/material"
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone"

type FormikStepperValuesType = {
  firstName: string
  lastName: string
  millionaire: false
  money: number | string
  description: string
}

const formikStepperValues: FormikStepperValuesType = {
  firstName: "",
  lastName: "",
  millionaire: false,
  money: "",
  description: "",
}

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time))

const Millionaire: FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{py: 2}}>Donation</Typography>
      <Card>
        <CardContent>
          <FormikStepper
            initialValues={formikStepperValues}
            onSubmit={async (values) => {
              await sleep(3000)
              console.log("values", values)
            }}
          >
            <FormikStep
              label="Personal Data"
              validationSchema={object({
                firstName: string().required().min(3).max(50)
              })}
            >
              <Box sx={{pb: 2}}>
                <Field fullWidth name="firstName" component={TextField} label="First Name" />
              </Box>
              <Box sx={{pb: 2}}>
                <Field fullWidth name="lastName" component={TextField} label="Last Name" />
              </Box>
              <Box sx={{pb: 2}}>
                <Field
                  name="millionaire"
                  type="checkbox"
                  component={CheckboxWithLabel}
                  Label={{ label: "I am a millionaire" }}
                />
              </Box>
            </FormikStep>
            <FormikStep
              label="Bank Accounts"
              validationSchema={object({
                money: mixed().when("millionaire", {
                  is: true,
                  then: number()
                    .required()
                    .min(
                      1_000_000,
                      "Because you said you are a millionaire you need to have 1 million"
                    ),
                  otherwise: number().required().min(1),
                }),
              })}
            >
              <ShowFullName />
              <Box sx={{py: 2}}>
                <Field
                  fullWidth
                  name="money"
                  type="number"
                  component={TextField}
                  label="All the money I have"
                />
              </Box>
            </FormikStep>
            <FormikStep label="More Info">
              <ShowFullName />
              <Box sx={{py: 2}}>
                <Field fullWidth name="description" component={TextField} label="Description" />
              </Box>
            </FormikStep>
            </FormikStepper>
          </CardContent>
        </Card>
    </Container>
  )
}

interface IFormikStep
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string
}

const FormikStep = ({ children }: IFormikStep) => {
  return <>{children}</>
}

const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
  const childrenArray = Children.toArray(children as ReactNode) as ReactElement<IFormikStep>[]
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]
  const [completed, setCompleted] = useState(false)

  const isLastStep = () => {
    return step === childrenArray.length - 1
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers)
          setCompleted(true)
        } else {
          setStep((s) => s + 1)
        }
      }}
    >
      {({ isSubmitting, values }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step} sx={{mb: 3}}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {!completed ? (
            currentChild
          ) : (
            <Grid
              container
              spacing={5}
              my={8}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <CheckCircleOutlineTwoToneIcon fontSize="large" color="success" />
              </Grid>
              <Grid item>
                <Typography variant="h4">{values.firstName}</Typography>
              </Grid>
            </Grid>
          )}
          {!completed && <Grid container spacing={2}>
            {step > 0 &&
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  back
                </Button>
              </Grid>
            }
            <Grid item>
              <Button
                startIcon={isSubmitting && <CircularProgress size="1rem" />}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? "Submitting" : isLastStep() ? "submit" : "next"}
              </Button>
            </Grid>
          </Grid>
          }
        </Form>
      )}
    </Formik>
  )
}

const ShowFullName: FC = () => {
  const formikContext = useFormikContext<{ firstName: string, lastName: string }>()

  return (
    <Typography variant="h4">
      Hello, {formikContext.values.firstName + " " + formikContext.values.lastName}!
    </Typography>
  )
}

export { Millionaire }
