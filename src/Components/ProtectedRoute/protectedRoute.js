import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  pathname: pathname,
  ...rest
}) => {
  const auth = localStorage.getItem("AUTH");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth === "true") {
          console.log("redirected");
          return <Component {...props} />;
        } else {
          console.log(" not redirected");
          return <Redirect to={pathname} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
