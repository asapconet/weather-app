import React, { useState } from 'react';

type AlertDisclosureProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function useAlertDisclosure(): AlertDisclosureProps {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return { isOpen, onOpen, onClose };
}
