import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import { useEffect } from "react";
const CustomLoader = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Image
                  src={"/assets/loader.gif"}
                  alt="loader"
                  width={300}
                  height={300}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CustomLoader;
