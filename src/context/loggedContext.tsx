import { createContext } from "react";

interface myContextInterface {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<myContextInterface>({
  state: false,
  setState: () => {},
});

export default MyContext;
