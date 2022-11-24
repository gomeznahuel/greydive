import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CapitalLetter } from "../../helpers";
import { Data } from "../../types";

export const HomeRender = ({ item }: { item: Data }) => {
  const { cliente } = item;
  
  return (
    <>
      <Link as={NavLink} to={`/${cliente}/testeador-1`} color="brand.200" fontWeight="bold" fontSize="xl" m="3" _hover={{ color: "brand.900", bg: 'brand.200' }} border="2px" borderColor="orange.500" p="1rem" w='{{ base: "40%", md: "20%" }}' textAlign="center" borderRadius="md" >
        {CapitalLetter(cliente)}
      </Link>
    </>
  );
};
