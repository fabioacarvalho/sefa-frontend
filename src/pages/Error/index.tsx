import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();


  console.log("Erro")
    console.warn(error?.status)

  // Verifica se o erro existe
  const message = error?.statusText || error?.message || "Something went wrong.";

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! An error occurred.</h1>
      <p>{message}</p>
      <Button className="btn btn-primary" name="Go Back Home" onClick={() => navigate("/")}/>
    </div>
  );
};

export default ErrorPage;