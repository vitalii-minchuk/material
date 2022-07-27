import { createTheme } from "@mui/material/styles"

import { sliderClasses } from "@mui/material"

export const theme = createTheme({
  components: {
    // MuiButton: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       ...(ownerState.variant === "contained" &&
    //         ownerState.color === "primary" && {
    //           backgroundColor: "#202020",
    //           color: "#fff",
    //         }),
    //     }),
    //   },
    // },
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === "vertical" && {
            backgroundColor: "transparent",
            color: theme.palette.grey[500],
            fontWeight: 700,
            padding: 0,
            left: "3rem",
          }),
          [`&.${sliderClasses.valueLabelOpen}`]: {
            transform: "none",
            top: "initial",
          },
        }),
      },
    },
  },
  palette: {
    secondary: {
      light: '#0066ff',
      main: '#bada55',
      contrastText: '#ffcc00',
    },
    info: {
      main: "#ffffff"
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

