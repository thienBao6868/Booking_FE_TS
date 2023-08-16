import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useGlobalContext = () => useContext(AuthContext);