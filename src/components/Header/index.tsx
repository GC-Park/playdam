import styled, { ThemeProvider } from 'styled-components';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo>PLAYDAM</HeaderLogo>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 72px;
  background-color: #B97D7D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #B97D7D;
  margin-bottom: 48px;
`;

const HeaderLogo = styled.h1`
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.1rem;
  color: #fff;
`;

export default Header;
