import App from "@/App";
import RootLayout from "@/layouts/RootLayout";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import PasswordReset from "@/pages/Auth/ResetPassword";
import TwoFactorAuth from "@/pages/Auth/TwoFactorAuth";
import Contact from "@/pages/Contact";


const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/forgot-password",
                element: <PasswordReset />
            },
            {
                path: "/two-factor-auth",
                element: <TwoFactorAuth />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]


export default routes;