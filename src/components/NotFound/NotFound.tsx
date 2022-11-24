import { Box, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" height="80vh">
      <Text fontSize={42} fontWeight={"medium"}>Page not found.</Text>
      <Link as={NavLink} to="/" color="brand.200" _hover={{ color: "brand.900", opacity: "8" }} fontSize={24} fontWeight={"medium"}>
      &larr; Go back to home page &rarr; 
      </Link>
    </Box>
  );
};

export default NotFound;
