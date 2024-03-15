import PlayList from '../components/PlayList';
import Inventory from '../components/Inventory';
import { useLocation } from 'react-router-dom';

function Home() {
  let location = useLocation();

  return (
    <>
      <Inventory path={location.pathname} />
      <PlayList />
    </>
  );
}

export default Home;
