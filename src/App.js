import './App.css';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import AppBar from './containers/layout/AppBar';
import Footer from './containers/layout/Footer';
import UserRoutes from './routes/UserRoutes';
import LoadingContainer from './components/common/LoadingContainer';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppBar checked={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <LoadingContainer>
        <UserRoutes />
      </LoadingContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
