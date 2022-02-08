import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import LiftbookEntry from "../components/LiftbookEntry";

function Liftbook() {
  return (
    <Box py={3} w="100%">
      {/* Title */}
      <Heading size="lg" mb={2}>
        Liftbook
      </Heading>
      <Text color="gray.400" mb={4} mt={6}>
        Personal stats
      </Text>
      <SimpleGrid columns={[2, 5]} spacing={[2, 5]}>
        <LiftbookEntry />
      </SimpleGrid>
    </Box>
  );
}

export default Liftbook;
