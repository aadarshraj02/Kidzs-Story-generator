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
              <ModalBody className="p-10 w-full flex items-center justify-center">
                <Image
                  src={"/assets/loader.gif"}
                  alt="loader"
                  width={300}
                  height={300}
                  className="w-[200px] h-[200px]"
                />
                <h2 className="text-2xl text-center text-bold text-primary">
                  Please Wait, Story Generating...
                </h2>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CustomLoader;
