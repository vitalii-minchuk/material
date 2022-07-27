import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(1).max(50),
  email: Yup.string().required().email(),
  phoneNumber: Yup.string().required()
    .test("phoneNumber",
    "Not typing '123' is a validation violation",
    function (value) {
        return (value === "123");
    }),
})

export type UserData = {
  fullName: string
  email: string
  phoneNumber: string
}