import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Funcionalidades from '../pages/Funcionalidades'
import Login from '../pages/Login'
import AdminFuncionalidades from '../pages/admin/Funcionalidades'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/funcionalidades",
    element: <Funcionalidades />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/funcionalidades",
    element: <AdminFuncionalidades />,
  }
]);

function Route() {
    return (
        <RouterProvider router={router} />
    )
}

export default Route