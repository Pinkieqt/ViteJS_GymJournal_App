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
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

interface Users {
  key: string;
  value: boolean;
}

function AddModal() {
  const isMobile = useMediaQuery({ query: "(max-device-width: 1024px)" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItems, setItems] = useState<Users[]>([
    { key: "Dudu", value: false },
    { key: "Luke", value: false },
    { key: "Tom", value: false },
    { key: "Dejvo", value: false },
  ]);

  return (
    <>
      {/* Button */}
      {!isMobile ? (
        <Button rightIcon={<Icon as={IoAddCircle} />} variant="outline" onClick={onOpen}>
          Add entry
        </Button>
      ) : (
        <Button variant="ghost">
          <Icon as={IoAddCircle} w={8} h={8} onClick={onOpen} />
        </Button>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add member arrival</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacing={3}>
              {selectedItems.map((item) => {
                console.log(item);
                return (
                  <Button
                    variant={item.value === true ? "solid" : "outline"}
                    colorScheme={item.value === true ? "green" : "red"}
                    w="full"
                    key={item.key}
                    onClick={() => {
                      item.value = !item.value;
                      setItems([...selectedItems]);
                    }}
                  >
                    {item.key}
                  </Button>
                );
              })}
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={2} onClick={onClose}>
              Close
            </Button>
            <Button variant="solid">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddModal;
