import styled from 'styled-components';
import PlaydamLogoSvg from '../../assets/playdam_logo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const onClickHeaderLogo = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <HeaderLogo onClick={onClickHeaderLogo} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  height: 72px;
  background-color: #ffffff;

  padding: 0 20px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(69, 69, 69, 0.1) 2px 2px 2px 0px;
`;

const HeaderLogo = styled(PlaydamLogoSvg)`
  cursor: pointer;
`;

export default Header;
