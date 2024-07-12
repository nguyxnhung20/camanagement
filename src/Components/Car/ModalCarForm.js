import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import CarForm from "./CarForm";

function ModalCarForm({ showForm, onClose, onSubmit, car }) {
  return (
    <Modal isOpen={showForm} toggle={onClose}>
      <ModalHeader toggle={onClose}>
        <strong>{car ? "Cập nhật thông tin xe" : "Thêm xe mới"}</strong>
      </ModalHeader>
      <ModalBody>
        <CarForm car={car} onSubmit={onSubmit} onCancel={onClose} />
      </ModalBody>
    </Modal>
  );
}

export default ModalCarForm;
