
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from './theme';
import { AuthProvider } from './contexts/AuthContext';
import Index from "./pages/Index";
import Lighting from "./pages/Lighting";
import WallDecor from "./pages/WallDecor";
import TableDecor from "./pages/TableDecor";
import Sculptures from "./pages/Sculptures";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/wall-decor" element={<WallDecor />} />
          <Route path="/table-decor" element={<TableDecor />} />
          <Route path="/sculptures" element={<Sculptures />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
