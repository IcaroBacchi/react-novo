import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function DialogModal({
  titulo,
  children,
  header,
  handleConfirm,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleConfirm();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className="bg-blue-500" type="primary" onClick={showModal}>
        {titulo}
      </Button>
      <Modal
        title={header}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: "bg-blue-600" }}
      >
        {children}
      </Modal>
    </>
  );
}
