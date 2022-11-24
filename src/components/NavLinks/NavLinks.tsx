import { Box } from "@chakra-ui/react";
import links from "./Data"; 
import Render from "./Render";
import { motion } from "framer-motion";

const NavLinks = () => {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }} transition={{ duration: 1 }}>
      <Box display="flex" gap={4}>
        {links.map((link) => <Render key={link.url} link={link} />)}
      </Box>
    </motion.div>
  );
};

export default NavLinks;