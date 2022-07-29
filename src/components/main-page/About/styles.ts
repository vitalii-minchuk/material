export const styles = {
  wrapper: {
    pb: "40px",
  },
  title: {
    textAlign: "center",
    mb: 3
  },
  text: {
    maxWidth: "500px",
    textAlign: "center",
    margin: "0 auto 24px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid #00d8ff",
    borderRadius: "15px",
    height: "230px",
    cursor: "pointer",
    transition: "all .3s",
    "&:hover": {
      border: "2px solid #6a00ff"
    },
    "&:hover > div": {
      backgroundColor: "#6a00ff"
    }
  },
  icon: {
    display: "grid",
    placeContent: "center",
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#00d8ff",
    color: "black",
    mb: 2,
  }
}