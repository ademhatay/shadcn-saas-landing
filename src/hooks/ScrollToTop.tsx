import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.state.location.pathname]);

  return null;
};

export default ScrollToTop;
