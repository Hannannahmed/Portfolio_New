import React from 'react';
import { Modal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

const PrivacyPolicyModal: React.FC<ModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="modal-title-custom">Project Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <p className="modal-text">
          This project is a full e-commerce platform for car parts, developed using React Native, with features like product browsing, cart management, and secure payment processing via Stripe. My role as the frontend developer involved building the user interface and ensuring a seamless user experience. Due to the company’s privacy policy, the APK or live version cannot be shared publicly. For more details, feel free to reach out, but no source code or download links can be provided due to confidentiality.
        </p>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <button  onClick={handleClose} className="custom-button">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PrivacyPolicyModal;
