import { useContext } from "react";
import { Context } from "../context/Context";

export function useMainContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useMainContext deve ser usado dentro de um ContextProvider");
  }
  return context;
}