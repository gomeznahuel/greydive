import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#292643", // Background color
      200: "#ED820E", // Orange
      900: "#ffffff", // White
    },
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
});

export default theme;
