import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
