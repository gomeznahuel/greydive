import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CapitalLetter, DeleteDash } from "../../helpers";
import { Data, pregunta } from "../../types";
import { motion } from "framer-motion";
import { Footer, Tareas, Transcription, Video } from "../../components";

export const ClientRender = ({ item }: { item: Data }) => {
  const { cliente, transcripcion, linkVideo, escenario, preguntas } = item;
  const { tester } = useParams<{ tester: string }>();

  let count = 1;

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <Text fontSize="3xl" fontWeight="bold">
          {CapitalLetter(cliente)}
        </Text>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          {CapitalLetter(DeleteDash(tester as string))}
        </Text>

        <Video src={linkVideo} title="video" />
        <Transcription transcription={transcripcion} />

        <Heading as="h3" size="lg" my={6}>
          Tareas
        </Heading>

        <Box width={{ base: "100%", md: "47%" }}>
          <Text fontSize="lg" fontWeight="medium" mb={4}>{escenario}</Text>
          <hr />
        </Box>

        {preguntas.map((pregunta: pregunta) => (
          <Tareas key={pregunta.texto} pregunta={pregunta} count={count++} />
        ))}

        <Footer />
      </motion.div>
    </>
  );
};
