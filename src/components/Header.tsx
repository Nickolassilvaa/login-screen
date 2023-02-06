import { useContext } from "react";
import MyContext from "../context/loggedContext";
import logoKawasaki from "../img/kawasaki-logo.jpg";

export function Header() {
  const { state, setState } = useContext(MyContext);

  function logout() {
    localStorage.removeItem("oauth");
    setState(!state);
  }
  return (
    <>
      <header className="flex justify-between items-center px-6 bg-black text-white md:h-auto md:py-3 h-auto ">
        <div className="w-[150px]">
          <img src={logoKawasaki} alt="Logo Kawasaki" />
        </div>
        <div className="hidden md:block">
          <h1 className="md:text-3xl">WSK HOMOLOGAÇÃO</h1>
        </div>
        <div className="flex gap-4 w-[200px] justify-end">
          <button onClick={logout}>Logout</button>
        </div>
      </header>
      <div className="bg-[#69bd27] w-full h-2 bottom-0 right-0"></div>
    </>
  );
}
