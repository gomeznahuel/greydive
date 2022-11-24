import { ChakraProvider } from "@chakra-ui/react";
import { ClientProvider } from "../../context";
import theme from "../../stylesheet/Theme";

/**
 * @component AppProviders
 * @description This component is the root of the application. It provides the context for the application.
 * @param {React.ReactNode} children - The children of the component.
 * @returns {JSX.Element} - The AppProviders component.
 * @example <AppProviders>...</AppProviders>
*/

type Props = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <ClientProvider> 
        {children}
      </ClientProvider>
    </ChakraProvider>
  );
};

export default AppProviders;