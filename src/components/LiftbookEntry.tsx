import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Icon,
  SimpleGrid,
  Box,
  Flex,
  Tag,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { IoCreateOutline } from "react-icons/io5";

function LiftbookEntry() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* View of one entry */}
      <Box as="button" onClick={onOpen} w="100%" h="40" bg="gray.100" rounded="md" px={3} py={2}>
        <Flex direction="column" justify="center" align="center">
          <Tag variant="subtle" colorScheme="green">
            Legs
          </Tag>
          <Text my={3} fontSize="lg">
            Deadlift
          </Text>
          <Flex justify="space-evenly" w="100%">
            <Flex direction="column">
              <Text>work</Text>
              <Heading>93</Heading>
            </Flex>
            <Flex direction="column">
              <Text>max</Text>
              <Heading>93</Heading>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Manage cvik</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hello bejby</ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button variant="solid">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LiftbookEntry;
