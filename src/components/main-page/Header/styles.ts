export const styles = {
  wrapper: {
    height: {xs: 50, sm: 70},
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
  },
  logo: {
    fontSize: {xs: "1.2rem", sm: "2rem"},
    fontWeight: 700,
    color: "#00d8ff", //"#6a00ff"
  },
  menuList: {
    display: {xs: "none", sm: "flex"},
  },
  collapse: {
    display: {xs: "block", sm: "none"},
    position: "absolute",
    top: "50px",
    left: "0",
    zIndex: 10,
    right: "0"
  },
  humbuggerMenuList: {
    color: "whitesmoke",
    textAlign: "center",
    display: "grid",
    placeContent: "center"
  },
  iconsBox: {
    display: {xs: "grid", sm: "none"},
    placeContent: "center",
  },
  icon: {
    color: "white",
  }
}