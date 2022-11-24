import { Box } from "@chakra-ui/react";
import { Router } from "./routes";

const App = () => {
  return (
    <Box bg="brand.100" color="brand.900" minH="100vh">
      <Router />
    </Box>
  );
};

export default App;
