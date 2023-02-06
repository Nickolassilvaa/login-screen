import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

import { title } from "../assets/columnsData";
import { useContext } from "react";
import MyContext from "../context/loggedContext";
import { Navigate } from "react-router-dom";

export function Home() {
  const { state } = useContext(MyContext);

  return (
    <>
      {state === false && <Navigate to="/" replace={true} />}
      <Header />
      <Main title={title} />
      <Footer />
    </>
  );
}
