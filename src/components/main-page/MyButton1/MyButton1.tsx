import { styled } from "@mui/material/styles"
import { Button, ButtonProps } from "@mui/material"

export const MyButton1 = styled(Button)<ButtonProps>(() => ({
  background: "transparent",
  padding:  "4px 15px",
  border: "1px solid #00d8ff",
  color: "#00d8ff",
  borderRadius: "30px",
  textTransform: "uppercase",
  "&:hover": {
    boxShadow: "2px 2px 10px rgba(255, 255, 255, 0.5)"
  },
}))