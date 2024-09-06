import React from "react";
import "./Modal.css";
const Modal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5,
          textAlign: "center",
        }}
      >
        <p>{message}</p>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
};

export default Modal;
