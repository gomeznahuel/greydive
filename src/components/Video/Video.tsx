import { AspectRatio } from "@chakra-ui/react";

type VideoProps = {
  src: string;
  title: string;
};

const Video = ({ src, title }: VideoProps) => {
  return (
    <AspectRatio  maxW="100%"  ratio={16 / 9} margin="auto" mb={4}>
      <iframe src={src} title={title} allowFullScreen />
    </AspectRatio>
  );
};

export default Video;
