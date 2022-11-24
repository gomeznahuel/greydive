import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, NotFound } from "../components";
import { ClientPage, HomePage } from "../pages";

const Router = () => {
  return (
    <Box width={{ base: "100%", md: "75%" }} margin="auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:idclient/:tester" element={<ClientPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Router;
