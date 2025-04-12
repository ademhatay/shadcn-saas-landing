import { Button } from "../ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ThemeToggle";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const Header = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderLinks = () => (
        <>
            <Button className="text-base font-medium hover:text-primary transition-colors dark:text-[#ECECEC] p-0" variant="link">
                <div>Home</div>
            </Button>
            <Button className="text-base font-medium hover:text-primary transition-colors dark:text-[#ECECEC] p-0" variant="link">
                <div>Features</div>
            </Button>
            <Button className="text-base font-medium hover:text-primary transition-colors dark:text-[#ECECEC] p-0" variant="link">
                <div>Pricing</div>
            </Button>
            <Button className="text-base font-medium hover:text-primary transition-colors dark:text-[#ECECEC] p-0" variant="link">
                <Link to="/contact">Contact</Link>
            </Button>
            <Button className="text-base font-medium hover:text-primary transition-colors dark:text-[#ECECEC] p-0" variant="link">
                <div>FAQ</div>
            </Button>
            <Button className="text-base font-medium hover:text-primary transition-colors dark:text-[#ECECEC] p-0" variant="link">
                <div>Team</div>
            </Button>
        </>
    );

    if (isDesktop) {
        return (
            <div 
                className={`w-full h-20 fixed z-[999] transition-all duration-300 ${
                    scrolled 
                        ? "bg-white/80 dark:bg-header/80 backdrop-blur-lg shadow-md top-0 border-b border-gray-200/30 dark:border-gray-800/30" 
                        : "bg-transparent top-6"
                }`}
                style={{
                    width: scrolled ? '100%' : 'calc(100% - 48px)',
                    borderRadius: scrolled ? '0' : '16px',
                    margin: scrolled ? '0' : '0 24px',
                }}
            >
                <div className="container mx-auto flex justify-between items-center h-full">
                    <div className="flex gap-x-3 justify-center items-center">
                        <svg
                            className="w-7 h-7 text-primary dark:text-white"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.53731 0.826873C7.5125 0.824392 7.4875 0.824392 7.46269 0.826873L3.96269 1.17687C3.85672 1.18747 3.76025 1.24262 3.69736 1.32857L0.699771 5.42528C0.654046 5.48627 0.62647 5.56165 0.625057 5.6434C0.625019 5.6456 0.625 5.64781 0.625 5.65001C0.625 5.65052 0.625001 5.65103 0.625003 5.65153C0.625363 5.74237 0.658021 5.82559 0.712087 5.8903L7.21042 13.7883C7.28165 13.8749 7.38789 13.925 7.5 13.925C7.61211 13.925 7.71835 13.8749 7.78958 13.7883L14.2879 5.89031C14.342 5.8256 14.3746 5.74237 14.375 5.65153C14.375 5.65103 14.375 5.65052 14.375 5.65001C14.375 5.64849 14.375 5.64697 14.375 5.64545C14.3749 5.63963 14.3747 5.63382 14.3744 5.62801C14.37 5.55219 14.3431 5.48242 14.3002 5.42527L11.3026 1.32857C11.2397 1.24262 11.1433 1.18747 11.0373 1.17687L7.53731 0.826873ZM10.925 5.27501V5.25236L10.9223 5.27501H10.925ZM10.9342 5.17498H13.1877L11.2495 2.5261L10.9342 5.17498ZM10.5707 1.88395L8.04432 1.63131L10.1747 5.21034L10.5707 1.88395ZM6.95568 1.63131L4.42931 1.88395L4.82531 5.21034L6.95568 1.63131ZM3.75046 2.5261L1.81226 5.17498H4.0658L3.75046 2.5261ZM1.79416 6.02501L6.75861 12.0587L4.22371 6.0669C4.21787 6.0531 4.21314 6.0391 4.20949 6.02501H1.79416ZM5.15055 6.02501L7.49999 12.1085L9.84943 6.02501H9.78681H5.21319H5.15055ZM10.7905 6.02501C10.7869 6.0391 10.7821 6.0531 10.7763 6.0669L8.24139 12.0587L13.2058 6.02501H10.7905ZM7.5 2.18317L9.34038 5.27501H5.65962L7.5 2.18317Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <Button
                            className="dark:text-white text-2xl font-bold p-0"
                            variant="link"
                        >
                            <Link to="/" className="inline-flex items-center transition-colors hover:text-primary dark:hover:text-primary">Company</Link>
                        </Button>
                    </div>
                    <div className="flex space-x-7">{renderLinks()}</div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline"
                            className="rounded-full px-6 py-2 border-gray-300 hover:border-primary hover:bg-primary/10 dark:border-gray-700 dark:hover:border-primary"
                        >
                            Download
                        </Button>
                        <Button
                            variant="default"
                            className="rounded-full px-8 py-2 bg-[#5B72B9] text-white hover:bg-[#4A60A8] transition-colors"
                        >
                            Sign Up
                        </Button>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Sheet>
            <div 
                className={`flex container py-4 gap-x-3 justify-between items-center fixed z-[998] transition-all duration-300 ${
                    scrolled 
                        ? "bg-white/80 dark:bg-header/80 backdrop-blur-lg shadow-md top-0 border-b border-gray-200/30 dark:border-gray-800/30" 
                        : "bg-transparent top-4"
                }`}
                style={{
                    width: scrolled ? '100%' : 'calc(100% - 32px)',
                    borderRadius: scrolled ? '0' : '12px',
                    margin: scrolled ? '0' : '0 16px',
                }}
            >
                <div className="flex gap-x-3 justify-center items-center">
                    <svg
                        className="w-7 h-7 text-primary dark:text-white"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.53731 0.826873C7.5125 0.824392 7.4875 0.824392 7.46269 0.826873L3.96269 1.17687C3.85672 1.18747 3.76025 1.24262 3.69736 1.32857L0.699771 5.42528C0.654046 5.48627 0.62647 5.56165 0.625057 5.6434C0.625019 5.6456 0.625 5.64781 0.625 5.65001C0.625 5.65052 0.625001 5.65103 0.625003 5.65153C0.625363 5.74237 0.658021 5.82559 0.712087 5.8903L7.21042 13.7883C7.28165 13.8749 7.38789 13.925 7.5 13.925C7.61211 13.925 7.71835 13.8749 7.78958 13.7883L14.2879 5.89031C14.342 5.8256 14.3746 5.74237 14.375 5.65153C14.375 5.65103 14.375 5.65052 14.375 5.65001C14.375 5.64849 14.375 5.64697 14.375 5.64545C14.3749 5.63963 14.3747 5.63382 14.3744 5.62801C14.37 5.55219 14.3431 5.48242 14.3002 5.42527L11.3026 1.32857C11.2397 1.24262 11.1433 1.18747 11.0373 1.17687L7.53731 0.826873ZM10.925 5.27501V5.25236L10.9223 5.27501H10.925ZM10.9342 5.17498H13.1877L11.2495 2.5261L10.9342 5.17498ZM10.5707 1.88395L8.04432 1.63131L10.1747 5.21034L10.5707 1.88395ZM6.95568 1.63131L4.42931 1.88395L4.82531 5.21034L6.95568 1.63131ZM3.75046 2.5261L1.81226 5.17498H4.0658L3.75046 2.5261ZM1.79416 6.02501L6.75861 12.0587L4.22371 6.0669C4.21787 6.0531 4.21314 6.0391 4.20949 6.02501H1.79416ZM5.15055 6.02501L7.49999 12.1085L9.84943 6.02501H9.78681H5.21319H5.15055ZM10.7905 6.02501C10.7869 6.0391 10.7821 6.0531 10.7763 6.0669L8.24139 12.0587L13.2058 6.02501H10.7905ZM7.5 2.18317L9.34038 5.27501H5.65962L7.5 2.18317Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <div className="dark:text-white text-2xl font-bold">
                        <Link to="/" className="hover:text-primary transition-colors">Company</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <ModeToggle />
                    <SheetTrigger>
                        <div className="p-1 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors">
                            <svg
                                className="w-7 h-7 dark:text-white"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </SheetTrigger>
                </div>
            </div>
            <SheetContent side="top" className="dark:bg-header/95 bg-white/95 border-b-0 z-[998]">
                <SheetHeader className="flex justify-center items-center">
                    <Button className="dark:text-white text-2xl font-bold" variant="link">
                        <Link to="/" className="hover:text-primary transition-colors">Company</Link>
                    </Button>
                    <SheetClose />
                </SheetHeader>
                <SheetDescription className="flex flex-col justify-center items-center mx-auto space-y-4 mt-4">
                    {renderLinks()}
                </SheetDescription>
                <SheetFooter className="gap-y-3 mt-6">
                    <Button
                        variant="outline"
                        className="rounded-full w-full border-gray-300 hover:border-primary hover:bg-primary/10 dark:border-gray-700 dark:hover:border-primary"
                    >
                        Download the app
                    </Button>
                    <Button
                        variant="default"
                        className="rounded-full w-full bg-[#5B72B9] text-white hover:bg-[#4A60A8] transition-colors"
                    >
                        Sign Up
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default Header;