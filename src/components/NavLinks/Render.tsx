import React from "react";
import { Link } from "@chakra-ui/react";

type Props = {
  link: {
    url: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  };
};

const Render = ({ link }: Props) => {
  const { url, icon: Icon } = link;
  return (
    <Link href={url} target="_blank" rel="noreferrer" _hover={{ color: "brand.200" }}>
      <Icon fontSize={22} />
    </Link>
  );
};

export default Render;
