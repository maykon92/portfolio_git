import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#232323",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "rgba(255,255,255,0.08)",
      dark: "#111111",
    },
    background: {
      default: "#232323",
      paper: "#1f1f1f",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.72)",
    },
  },
  typography: {
    fontFamily: `"Cormorant Garamond", "Times New Roman", serif`,
    h1: {
      fontWeight: 700,
      fontSize: "4rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: 0.3,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#232323",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
          minHeight: 44,
          transition: "all 0.25s ease",
        },
        contained: {
          backgroundColor: "#1f1f1f",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.08)",
          "&:hover": {
            backgroundColor: "#2b2b2b",
          },
        },
        outlined: {
          color: "#ffffff",
          borderColor: "rgba(255,255,255,0.22)",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.4)",
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
        text: {
          color: "rgba(255,255,255,0.85)",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.04)",
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          color: "rgba(255,255,255,0.8)",
          borderColor: "rgba(255,255,255,0.2)",
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1f1f1f",
          color: "#ffffff",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(35,35,35,0.92)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        },
      },
    },
  },
});

export default theme;