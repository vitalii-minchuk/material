export const navbarStyles = {
  drawer: {
    width: { xs: 30, sm: 220 },
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: { xs: 35, sm: 220 },
      boxSizing: "border-box",
      backgroundColor: "#101F33",
      color: "rgba(255, 255, 255, 0.7)"
    },
  },
  button: {
    padding: { xs: 0, sm: 1 },
  },
  icon: {
    padding: "5px", 
    color: "rgba(255, 255, 255, 0.7)",
    "& .hover": {
      color: "gray"
    }
  },
  text : {
    display: { xs: 'none', sm: 'block' },
    "& span": {
      marginLeft: "-10px",
      fontWeight: "600",
      fontSize: "16px"
    }
  }
}