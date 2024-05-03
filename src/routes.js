import AboutUser from "./pages/AboutUser/AboutUser"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import MainProduct from "./pages/MainProduct/MainProduct"
import NotFound from './pages/NotFound/NotFound'
import Products from "./pages/Products/Products"
import Rigester from "./pages/Rigester/Rigester"
import PrivatePage from './components/PrivatePage/PrivatePage'

import Index from "./pages/AdminPanel/Index"
import AdminProducts from './pages/AdminPanel/Products/Products'
import { Navigate } from "react-router-dom"

let routes = [
    { path: '/', element: <Home /> },
    // { path: '/login', element: <Login /> },
    // { path: '/register', element: /<Rigester /> },
    { path: '/products', element: <Products /> },
    // { path: '/products/:produ/ctID', element: <MainProduct /> },
    { path: '/cart', element: <Cart /> },
    // { path: '/about-user', element: <PrivatePage><AboutUser /></PrivatePage> },
    { path: '*', element: <NotFound /> },

    {
        path: '/admin',
        element: <Index />,
        children: [
            { path: '', element: <Navigate to='products' /> },
            { path: 'products', element: <AdminProducts /> },
        ]
    }
]

export default routes