import { FC, Fragment } from "react"

import { Field, FieldArray, Form, Formik } from "formik"
import { CheckboxWithLabel, TextField } from "formik-mui"
import { array, number, object, string, ValidationError } from "yup"

import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography
} from "@mui/material"

type DonationType = {
  institution: string
  percentage: number
}

const emptyDonation = {
  institution: "",
  percentage: 0
}
type FormikDonationValuesType = {
  firstName: string
  lastName: string
  donation: number | string
  accept: boolean
  donations: DonationType[]
}

const formikDonationValues: FormikDonationValuesType = {
  firstName: "",
  lastName: "",
  donation: "",
  accept: false,
  donations: [emptyDonation]
}

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time))

const Donation: FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{py: 2}}>Donation</Typography>
      <Card>
        <CardContent>
          <Formik
            validationSchema={
              object({
                firstName: string()
                  .required("We need to know your name")
                  .min(2, "your name is too short")
                  .max(50, "your name is too long"),
                lastName: string().min(1).max(100),
                donation: number().required().min(100),
                donations: array(object({
                  institution: string().required("institution is a required field")
                    .min(3, "institutions name is too short")
                    .max(50, "institutions name is too long"),
                  percentage: number().required("percentage is needed")
                    .min(1, "percentage needs to be at least 1")
                    .max(100, "percentage can not be bigger than 100")
                })).min(1).max(4).test((donations) => {
                  const sum = donations?.reduce(
                    (acc, curr) => acc + (curr.percentage || 0), 0)

                    if (sum !== 100) {
                      return new ValidationError(`Percentage should be 100%,
                        but you have${sum}%`, undefined, "donations")
                    }

                  return sum === 100
                })
              })
            }
            initialValues={formikDonationValues}
            onSubmit={async (values) => {
              await sleep(2000)
              console.log(values)
            }}
          >
            {({ values, errors, isSubmitting, isValidating }) => (
              <Form autoComplete="off">
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Field fullWidth name="firstName" component={TextField} label="First Name" />
                  </Grid>
                  <Grid item>
                    <Field fullWidth name="lastName" component={TextField} label="Last Name" />
                  </Grid>
                  <Grid item>
                    <Field
                      fullWidth
                      type="number"
                      name="donation"
                      component={TextField}
                      label="Donation"
                    />
                  </Grid>
                  <Grid item>
                    <FieldArray name="donations">
                      {({ push, remove }) => (
                        <Fragment>
                          <Grid item >
                            <Typography variant="body1">All your donations</Typography>
                            {values.donations.map((_, index) => (
                              <Grid key={index}
                                alignItems="center"
                                container
                                spacing={3}
                                py={2}
                              >
                                <Grid item xs={12} sm="auto" py={2}>
                                  <Field
                                    fullWidth
                                    name={`donations.${index}.institution`}
                                    component={TextField}
                                    label="Institution" />
                                </Grid>
                                <Grid item xs={12} sm="auto" py={2}>
                                  <Field
                                    fullWidth
                                    name={`donations.${index}.percentage`}
                                    component={TextField}
                                    type="number"
                                    label="Percentage" />
                                </Grid>
                                <Grid item xs={12} sm="auto" py={2}>
                                  {values.donations?.length > 1 && 
                                  <Button disabled={isSubmitting} onClick={() => remove(index)}>
                                    delete
                                  </Button>
                                  }
                                </Grid>
                              </Grid>
                            ))}
                          </Grid>
                          <Grid item>
                            {typeof errors.donations === "string" &&
                              <Typography color="error">{errors.donations}</Typography>
                            }
                          </Grid>
                          <Grid item>
                            <Button disabled={isSubmitting} onClick={() => push(emptyDonation)}
                            >
                              add details
                            </Button>
                          </Grid>
                        </Fragment>
                      )}
                    </FieldArray>
                  </Grid>
                  <Grid item>
                    <Field
                      name="accept"
                      type="checkbox"
                      component={CheckboxWithLabel}
                      Label={{label: "Accepted terms and conditions"}}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit" 
                      variant="contained"
                      disabled={isSubmitting || isValidating || !values.accept}
                      startIcon={isSubmitting && <CircularProgress size="0.8rem" />}
                    >
                      {isSubmitting ? "submitting" : "submit"}
                    </Button>
                  </Grid>
                </Grid>
                <pre>{JSON.stringify({values, errors}, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

export { Donation }