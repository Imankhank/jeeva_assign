import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavbarComponent from "../layout/nav-component";

const MenuOffcanvas = ({ show, handleClose = () => {} }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <NavbarComponent />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MenuOffcanvas;
