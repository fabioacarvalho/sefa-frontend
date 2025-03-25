import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { routes } from "./main";
import { AuthContext } from "../contexts/AuthContext";
import AppProvider from "../contexts/AppProvider";

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  loader?: () => Promise<any>;
  children?: ChildrenRouteConfig[];
  errorElement?: React.ReactNode;
}

export interface ChildrenRouteConfig {
  path: string;
  element: React.ReactNode;
  loader?: () => any;
}

// Função para proteger as rotas privadas
const ProtectedRoute = ({ element, privateRoute }: any) => {
  const auth = useContext(AuthContext);

  // Se a rota for privada e o usuário não estiver autenticado, redireciona para o login
  if (privateRoute && !auth?.user) {
    return <Navigate to="/sign-in" />;
  }

  // Se a rota não for privada, ou o usuário estiver autenticado, renderiza o componente normalmente
  return element;
};

// Adapta a criação do roteador para incorporar a verificação de rotas privadas
const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: (
      <ProtectedRoute
        element={route.element}
        privateRoute={route.private} // Passa a propriedade private para o ProtectedRoute
      />
    ),
  }))
);

const AppRouter: React.FC = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default AppRouter;