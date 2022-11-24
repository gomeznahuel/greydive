import { ReactNode, useState } from "react";
import { ClientContext } from "../ClientContext";
import { GetData } from "../../services";
import { Data } from "../../types";

type ClientProviderProps = {
  children: ReactNode;
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState<Data[]>([]);

  const URL: string = "/database/db.json";

  const GetDataProvider = async () => {
    setIsLoading(true);
    const response = await GetData({ url: URL });
    setData(response);
    setIsLoading(false);
  };

  const value = { data, GetDataProvider, isLoading, client, setClient }; 

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
