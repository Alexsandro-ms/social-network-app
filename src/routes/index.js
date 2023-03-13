import { AuthContext } from "../contexts/auth";
import { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import UnauthorizedRoutes from "./unauthorized";
import AuthorizedRoutes from "./authorized";

function Routes() {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
