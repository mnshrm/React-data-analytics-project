import Dashboard from "./Scenes/Dashboard/Dashboard";
import FAQ from "./Scenes/FAQ/FAQ";
import Form from "./Scenes/Form/Form";
import Geography from "./Scenes/Geography/Geography";
import Invoices from "./Scenes/Invoices/Invoices";
import Line from "./Scenes/Line/Line";
import Pie from "./Scenes/Pie/Pie";
import Team from "./Scenes/Team/Team";
import Contacts from "./Scenes/Contacts/Contacts";
import Bar from "./Scenes/Bar/Bar";
import Root from "./Scenes/RootLayout/Root";
import Error from "./Scenes/ErrorLayout/Error";
import Calendar from "./Scenes/Calendar/Calendar";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/geography",
        element: <Geography />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/line",
        element: <Line />,
      },
      {
        path: "/pie",
        element: <Pie />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
]);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline to reset CSS to default */}
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
