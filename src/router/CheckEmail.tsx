import { ReactNode } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../hook/useGlobalcontext";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const CheckEmail = ({ children }: Props): JSX.Element => {
  const { isCheckEmail } = useGlobalContext();
  
  let location = useLocation();
  
  if (!isCheckEmail) {
    return <Navigate to="/signin" state={{ from: location }} replace/>;
  }

  return <>{children}</>;
};
export default CheckEmail;
