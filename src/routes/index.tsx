import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from 'components/Layout/Auth';
import {  PRIVATE_ROUTERS } from 'config/constants';
import {LoginPage} from 'pages/user/auth/Login';
import {RegisterPage} from 'pages/user/auth/Register';
import OverviewPage from "pages/user/Overview";

export const routers = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: PRIVATE_ROUTERS.BASE,
                children: [
                    {
                        path: PRIVATE_ROUTERS.BASE,
                        element: <OverviewPage />,
                    },
                    {
                        path: PRIVATE_ROUTERS.LOGIN,
                        element: <LoginPage />,
                    },
                    {
                        path: PRIVATE_ROUTERS.REGISTER,
                        element: <RegisterPage />,
                    }
                ]
            }
        ]
    }
])