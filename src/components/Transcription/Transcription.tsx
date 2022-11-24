import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  transcription: string;
};

const Transcription = ({ transcription }: Props) => {
  return (
    <>
      <Heading as="h2" size="lg" my={6}>
        Transcripción
      </Heading>
      <Box maxW={500} overflow="auto" h={400} bg="brand.100" p={8} mb={4}>
        <Text dangerouslySetInnerHTML={{ __html: transcription }}></Text>
      </Box>
    </>
  );
};

export default Transcription;
