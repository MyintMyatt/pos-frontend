
import LoginPage from "../features/auth/pages/LoginPage";
import { AuthLayout, NotFound } from "../constant/LazyLoad";

export const authRouter = [
  {
    path: "/",
    element: <AuthLayout />,
 
    children: [
      { index: true, element: <LoginPage /> },
    ],
  },
];
