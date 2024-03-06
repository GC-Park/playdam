import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
