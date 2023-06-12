import Home from "./components/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Error from "./components/errorPage/Error";
import Statistics from "./components/adv/statistics/Statistics";
import DashboardHome from "./dashboard/home/Home"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { lightBlue, grey, indigo, green } from "@mui/material/colors";
import "./app.scss"
import Dashboard from "./dashboard/Dashboard";
import Students from "./dashboard/students/Students";
import Groups from "./dashboard/groups/Groups";
import Teachers from "./dashboard/teachers/Teachers";
import Money from "./dashboard/money/Money";
import Settings from "./dashboard/settings/Settings";
import DashboardNav from "./dashboard/dashboardNav/Nav"
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const getTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ?
      {
        blue: createColor(lightBlue[600]),
        white: createColor(grey[800]),
        primary: {
          main: indigo[700],
        },
        secondary: {
          main: lightBlue[600],
        },
        custom: {
          background: grey[50],
          headerOpacity: "#ffffff6e",
          bunting: "#212e48",
          midnight: "#182236"
        }
      } : {
        blue: createColor(lightBlue[600]),
        white: createColor(grey[100]),
        primary: {
          main: '#000',
        },
        secondary: {
          main: '#00a3ff',
        },
        custom: {
          background: grey[900],
          headerOpacity: "#21212155",
          bunting: "#212e48",
          midnight: "#182236"
        }
      })
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.custom.background,
        }
      })
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: green[600],
          color: grey[100]
        }
      }
    },
  },
  shadows: ["none"],
  typography: {
    fontFamily: '"Raleway", sans-serif',
    fontWeightLight: 200,
  },
})

function App() {
  const [mode, setMode] = useState("light")
  const darkMode = useSelector(state => state.isDarkMode)
  const navigate = useNavigate()

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getTokens(mode)), [mode])
  const [token, setToken] = useState(true)

  useEffect(()=> {
    token ? navigate("/dashboard/home") :navigate("/")
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!token ? <>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/static"} element={<Statistics />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </> : <>
        <DashboardNav />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/students" element={<Students />} />
          <Route path="/dashboard/groups" element={<Groups />} />
          <Route path="/dashboard/teachers" element={<Teachers />} />
          <Route path="/dashboard/money" element={<Money />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </>}
    </ThemeProvider >
  );
}

export default App;
