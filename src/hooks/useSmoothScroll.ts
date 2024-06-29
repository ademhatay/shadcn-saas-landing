import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useSmoothScroll = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const { id, offset } = location.state.scrollTo;
      setTimeout(() => scrollToId(id, offset), 0);
    }
  }, [location]);

  const handleScroll = (id: string, offset: number) => {
    const currentPath = location.pathname;
    if (currentPath !== "/") {
      navigate("/", { state: { scrollTo: { id, offset } } });
    } else {
      scrollToId(id, offset);
    }
  };

  return handleScroll;
};

export default useSmoothScroll;