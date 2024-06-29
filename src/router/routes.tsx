import App from "@/App";
import RootLayout from "@/layouts/RootLayout";



const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <App />
            }
        ]
    }
]


export default routes;