import { styled } from "@mui/material/styles"
import { Button, ButtonProps } from "@mui/material"

export const MyButton = styled(Button)<ButtonProps>(() => ({
  background: "linear-gradient(45deg, #00d8ff 0%, #6a00ff 80%)",
  padding:  "4px 15px",
  borderRadius: "30px",
  color: "white",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "2px 2px 10px rgba(255, 255, 255, 0.5)"
  },
}))