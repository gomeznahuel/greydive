import { Box } from "@chakra-ui/react";
import { Data } from "../../types";
import { HomeRender } from "./HomeRender";

export const HomeList = ({ data }: { data: Data[] }) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {data.length > 0 ? data.map((item) => <HomeRender key={item.cliente} item={item} />) : <p>No hay datos</p>}
    </Box>
  );
};
