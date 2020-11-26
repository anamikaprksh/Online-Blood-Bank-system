import React from "react";
import { Redirect, Route } from "react-router-dom";

const NoSecureRoute = ({
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
          return <Redirect to={pathname} />;
        } else {
          console.log(" not redirected");
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default NoSecureRoute;
