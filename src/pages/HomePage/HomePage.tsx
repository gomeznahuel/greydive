import { useContext, useEffect } from "react";
import { ClientContext } from "../../context";
import { ContextType } from "../../types";
import { Loader } from "../../components";
import { HomeList } from "./HomeList";
import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"

export const HomePage = () => {
  const { data, GetDataProvider, isLoading } = useContext(ClientContext) as ContextType;

  useEffect(() => {
    GetDataProvider();
  }, []);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome!
        </Heading>
        <Text textAlign="center">
          Please select a client from the list below.
        </Text>

        <>{isLoading ? <Loader /> : <HomeList data={data} />}</>
      </motion.div>
    </>
  );
};
