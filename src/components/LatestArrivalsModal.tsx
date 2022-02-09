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
} from "@chakra-ui/react";
import { IoCreateOutline } from "react-icons/io5";

function LatestArrivalsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Button */}
      <Button rightIcon={<Icon as={IoCreateOutline} />} variant="outline" onClick={onOpen}>
        Arrival management
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Manage arrivals</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacing={3}></SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button variant="solid" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LatestArrivalsModal;
