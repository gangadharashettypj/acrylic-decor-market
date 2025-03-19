
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from './theme';
import Index from "./pages/Index";
import Lighting from "./pages/Lighting";
import WallDecor from "./pages/WallDecor";
import TableDecor from "./pages/TableDecor";
import Sculptures from "./pages/Sculptures";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lighting" element={<Lighting />} />
        <Route path="/wall-decor" element={<WallDecor />} />
        <Route path="/table-decor" element={<TableDecor />} />
        <Route path="/sculptures" element={<Sculptures />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
