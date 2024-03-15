import { useLocation } from 'react-router-dom';
import Inventory from '../components/Inventory';

function ReviewCollection() {
  let location = useLocation();

  return (
    <>
      <Inventory path={location.pathname}/>
      <>hello</>
    </>
  );
}

export default ReviewCollection;
