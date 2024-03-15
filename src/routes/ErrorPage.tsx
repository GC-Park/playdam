import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. 404 Not Found</p>
    </div>
  );
}
