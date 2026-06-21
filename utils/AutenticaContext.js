import { createContext, useState, useContext} from "react";

const AutenticaContext = createContext();

export function AutenticaProvider({ children }) {
  const [usuario, setUsuario] = useState();

  return (
    <AutenticaContext.Provider value={{ usuario, setUsuario}}>
      {children}
    </AutenticaContext.Provider>
  );
}
export function Autentica()
{
    return useContext(AutenticaContext)
}