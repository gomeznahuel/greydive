import { Box, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from "../NavLinks";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Box as='header' px={12} py={4} color="brand.900" display="flex" justifyContent="space-between" alignItems="center">
        <Link as={NavLink} to="/" color="brand.900" fontWeight="bold" fontSize={30} _hover={{ color: 'brand.200' }}>
          simulacr
        </Link>

        <NavLinks />
      </Box>
    </motion.div>
  );
};

export default Header;