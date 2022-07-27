export const headerStyles = {
  wrapper: {
    padding: "12px",
    backgroundColor:  "#009be5",
  },
  button: {
    "&.MuiButton-text": {
      color: "#ffffff",
      "&:hover": {
        color: "#006db3"
      }
    },
    "&.MuiButton-outlined": {
      color: "#ffffff",
      borderColor: "#ffffff",
      "&:hover": {
        color: "#006db3",
        borderColor: "#006db3"
      }
    },
  },
  title: {
    fontSize: {xs: "1.2rem", sm: "1.6rem"},
    color: "#ffffff",
    textTransform: "capitalize",
  }
}