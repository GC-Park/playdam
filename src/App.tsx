import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './themes';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div>Count: {count}</div>
      <StyledButton onClick={() => setCount((prev) => prev + 1)}>
        acbssc
      </StyledButton>
    </ThemeProvider>
  );
}

export default App;
