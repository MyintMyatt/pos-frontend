

import { AuthLayout,  Login,  NotFound } from "../constant/LazyLoad";

export const authRouter = [
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {  element: <Login /> ,index:true},
    ],
  },
];

