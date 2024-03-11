import styled, { ThemeProvider } from 'styled-components';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo>PLAYDAM</HeaderLogo>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: #A301DB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #decfcf;
`;

const HeaderLogo = styled.h1`
  cursor: pointer;
  user-select: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -0.1rem;
  color: #ffffff;
`;

export default Header;
