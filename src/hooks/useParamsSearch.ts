import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const useQueryParam = (paramName: string): string | null => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const paramValue = searchParams.get(paramName);

  useEffect(() => {
    if (!paramValue || paramValue.trim() === "") {
      navigate("/"); 
    }
  }, [paramValue, navigate]);

  return paramValue;
};

export default useQueryParam;
