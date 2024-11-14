import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import { RootLayout } from './RootLayout';
import './index.css';
import SignUp from './Pages/SignUp';
import SignInSide from './Pages/SignIn';
import BookingPage from './Pages/BookingPage';

const router = createMemoryRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/SignUp",
        element: <SignUp />
      },

      {
        path: "/SignIn",
        element: <SignInSide />
      },
      {
        path: "/BookingPage",
        element: <BookingPage />
      }
    ]
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
