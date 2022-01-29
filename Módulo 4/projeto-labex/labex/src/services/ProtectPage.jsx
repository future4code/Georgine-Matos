import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";

export const useProtectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("tokenRappi4C");
    if (!token) {
      history.push("/login");
    }
  }, [history]);
};

