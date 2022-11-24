import { Box, Text } from "@chakra-ui/react"
import { pregunta } from "../../types"

type Props = {
  pregunta: pregunta;
  count: number;
};

const Tareas = ({pregunta, count}: Props) => {
  const {texto, respuesta, tiempo } = pregunta
  
  return (
    <Box key={texto} w="40%" bg="brand.100" mt={5} p={4} width={{ base: "100%", md: "47%" }}>        
      <Text fontWeight="bold" fontSize="xl" mb={2}>Tarea {count++}:</Text>
      <Text fontWeight="bold" mb={4}>Tipo de tarea: {texto}</Text>
      <Text fontWeight="medium" mb={4}>Respuesta: {respuesta}</Text>
      <Text color="#F6905C" mb={4}>Duración de la tarea: {tiempo}</Text>
      <hr />
    </Box>
  )
}

export default Tareas