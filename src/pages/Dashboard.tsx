import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LatestArrivalsModal from "../components/LatestArrivalsModal";

function Dashboard() {
  const cardBg = useColorModeValue("green.100", "green.800");

  return (
    <Box py={3} w="100%">
      {/* Title */}
      <Heading size="lg" mb={2}>
        Welcome back, Dudu!
      </Heading>
      <Text color="gray.400" mb={4} mt={6}>
        Personal stats
      </Text>

      {/* Infocards */}
      <SimpleGrid columns={[2, 4]} spacing={2}>
        <Box w="100%" bg={cardBg} rounded="md" px={3} py={2}>
          <Stat>
            <StatLabel>This year</StatLabel>
            <StatNumber>7</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Box>
        <Box w="100%" bg={cardBg} rounded="md" px={3} py={2}>
          <Stat>
            <StatLabel>This month</StatLabel>
            <StatNumber>2</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Box>
        <Box w="100%" bg={cardBg} rounded="md" px={3} py={2}>
          <Stat>
            <StatLabel>All arrivals</StatLabel>
            <StatNumber>282</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Box>
        <Box w="100%" bg={cardBg} rounded="md" px={3} py={2}>
          <Stat>
            <StatLabel>Last arrival</StatLabel>
            <StatNumber>2.2</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} spacing={5}>
        {/* All members info */}
        <Text color="gray.400" mb={4} mt={6}>
          All members annual report
        </Text>

        {/* Your yearly info */}
        <Text color="gray.400" mb={4} mt={6}>
          Your annual report
        </Text>
      </SimpleGrid>
      {/* Arrivals of members */}
      <Text color="gray.400" mb={4} mt={6}>
        Arrivals of gym members
      </Text>

      {/* Latest arrivals */}
      <Text color="gray.400" mb={4} mt={6}>
        Latest arrivals
      </Text>
      <LatestArrivalsModal />

      {/* Heat map */}
      <Text color="gray.400" mb={4} mt={6}>
        Heat map
      </Text>
    </Box>
  );
}

export default Dashboard;
