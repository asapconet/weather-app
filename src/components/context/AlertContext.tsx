import React, { useState, createContext } from "react";
import useAlertDisclosure from "@/hooks/useAlertDisclosure";
import Status from "@/types/alertStatusEnum";

export const AlertContext = createContext<AlertContextType | null>(null);

export type AlertContextType = {
  handleAlert: (message: string, status: Status) => void;
};

export default function AlertContextProvider(children: React.ReactNode) {
  const [alertProps, setAlertProps] = useState({
    message: "",
    status: "",
  });

  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useAlertDisclosure();

  const handleAlert = (message: string, status: Status) => {
    onAlertOpen();
    setAlertProps({
      message,
      status,
    });
  };

  const value: AlertContextType = {
    handleAlert,
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
      {/* Get an alert library  */}
      {/* <AlertFeedback
        open={isAlertOpen}
        onClose={onAlertClose}
        message={alertProps.message}
        status={alertProps.status}
      /> */}
    </AlertContext.Provider>
  );
}
