import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import NotFoundImg from '../../../assets/img/404.svg';

const NotFound: React.FC = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();


  console.log("Erro")
    console.warn(error?.status)

  // Verifica se o erro existe
  const message = error?.statusText || error?.message || "404 - Not Found - Something went wrong.";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: "center", padding: "50px" }}>
      <h1>Oops! An error occurred.</h1>
      <p>{message}</p>
      <img src={NotFoundImg} alt="not-found" width={500}/>
      <Button className="btn btn-primary" name="Go Back Home" onClick={() => navigate("/")}/>
    </div>
  );
};

export default NotFound;