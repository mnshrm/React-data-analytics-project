import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Scenes/global/Topbar";
import Sidebar from "./Scenes/global/Sidebar";
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

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Sidebar />
      <ThemeProvider theme={theme}>
        {/* CssBaseline to reset CSS to default */}
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
