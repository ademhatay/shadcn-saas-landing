import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import Stars from "@/components/base/Stars";
import { useTheme } from "@/context/themeContext";
import { useState, useEffect } from "react";

const RootComponent = () => {
  const theme = useTheme();
  const [starColor, setStarColor] = useState<string>(theme.theme === "dark" ? "#fff" : "#348AC7");

  useEffect(() => {
    setStarColor(theme.theme === "dark" ? "#fff" : "#348AC7");
  }, [theme.theme]);

  return (
    <>
      <div className="absolute inset-0 z-0">
        <Stars color={starColor} />
      </div>
      <Header />
      <div className="relative z-10">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent
}) 