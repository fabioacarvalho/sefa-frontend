import { RouteConfig } from './Routes';

import Form from "../pages/Form";
import Login from "../pages/SignIn";
import NotFound from "../pages/Error/NotFound";
import Error from "../pages/Error/index";
import VerificationPage from '../pages/VerificationPage';
import FormTable from '../pages/List';


// Suas rotas
export const routes: RouteConfig[] = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Form />, errorElement: <Error />},
  { path: "/sign-in", element: <Login />, errorElement: <Error />},
  { path: "/confirm", element: <VerificationPage />, errorElement: <Error />},
  { path: "/list", element: <FormTable />, errorElement: <Error />, private: true },
];