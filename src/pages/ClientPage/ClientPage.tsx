import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClientContext } from "../../context";
import { ContextType, Data } from "../../types";
import { ClientList } from "./ClientList";

export const ClientPage = () => {
  const { data, isLoading, client, setClient } = useContext(ClientContext) as ContextType;
  const { idclient } = useParams<{ idclient: string, tester: string }>();

  const navigate = useNavigate();

  useEffect(() => {
    if (data.length > 0) setClient(data.filter((item) => item.cliente === idclient));
    else navigate("/");
  }, [data, idclient]);

  return (
    <Box px={12} py={4}>
      {isLoading ? <p>Loading...</p> : <ClientList data={client} />}
    </Box>
  );
};
