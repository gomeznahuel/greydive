import { Box, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ScrollToTop } from "../../helpers";

const Footer = () => {
  return (
    <Box as="footer" w="100%" bg="brand.100" display="flex" justifyContent="space-between" alignItems="center">
      <Link as={NavLink} to="/" bg='brand.200' color="brand.900" fontWeight="bold" fontSize={26} px={3} py={2} borderRadius='md' _hover={{ color: "brand.200", textDecoration: "none", bg: "#474141" }} >
        Back to home
      </Link>

      <Box w="80px" h="80px" borderRadius="50%" bg='brand.200' display="flex" justifyContent="center" alignItems="center" cursor="pointer" onClick={ScrollToTop} as="button" transition="all 0.3s ease" _hover={{ color: "brand.200", textDecoration: "none", bg: "#474141" }}>
        Ir arriba
      </Box>
    </Box>
  );
};

export default Footer;
