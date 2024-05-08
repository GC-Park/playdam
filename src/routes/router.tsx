import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from '../pages/Home';
import ReviewCollection from '../pages/ReviewCollection';
import ReviewBlogCollection from '../pages/ReviewBlogCollection';
import Chatting from '../components/Chatting/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'review',
        element: <ReviewCollection />,
      },
      {
        path: 'review/:reviewId',
        element: <ReviewBlogCollection />,
      },
      {
        path: 'chatting',
        element: <Chatting />,
      },
    ],
  },
]);
