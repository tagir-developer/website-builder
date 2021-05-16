import { useEffect } from "react";

export default function ScrollToTopOnMount(): null {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}