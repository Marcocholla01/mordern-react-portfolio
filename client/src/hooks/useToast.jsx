// src/hooks/useToast.js
import { useToast } from "../contexts/ToastContext.jsx";

export const useSuccessToast = () => {
  const { addToast } = useToast();
  return (message) => addToast(message, "success");
};

export const useErrorToast = () => {
  const { addToast } = useToast();
  return (message) => addToast(message, "error");
};
