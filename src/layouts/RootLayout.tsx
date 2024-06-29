
import Footer from "@/components/base/Footer";
import Header from "@/components/base/Header";
import { Outlet } from "react-router-dom";


const RootLayout = () => {


    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

export default RootLayout
