import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
  ModalHeader,
  ModalBody,
  Button,
  Divider,
  Box,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

function RegisterModal({ isOpen, onClose }) {
  return (
    <Modal>
      <ModalContent>
        <ModalBody>
          <Wrap>
            <WrapItem>First Name</WrapItem>
            <WrapItem>Last Nme</WrapItem>
          </Wrap>
          <Wrap>
            <WrapItem>Gender</WrapItem>
            <WrapItem>Phone Number</WrapItem>
          </Wrap>
          <Wrap>
            <WrapItem>Password</WrapItem>
            <WrapItem>Confirm Password</WrapItem>
          </Wrap>
          <Button>Submit</Button>
        </ModalBody>
      </ModalContent>

      <Stack></Stack>
    </Modal>
  );
}

export default RegisterModal;
