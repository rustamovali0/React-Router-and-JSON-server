import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalJson = ({ infoShow, setInfoShow, userData, setUserData }) => {
  const [list, setList] = useState([]);

  return (
    <div>
      <Modal show={infoShow} onHide={() => setInfoShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Id: {userData.id}</li>
            <li>firstName: {userData.firstName}</li>
            <li>lastName: {userData.lastName}</li>
            <li>UserName: {userData.username}</li>
            <li>
              Image: <img src={userData.image} style={{ width: "3rem", height: "3rem" }} />
            </li>
            <li>Password: {userData.password}</li>
            <li>bloodGroup: {userData.bloodGroup}</li>
            <li>domain: {userData.domain}</li>
            <li>macAddress: {userData.macAddress}</li>
            <li>university: {userData.university}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setInfoShow(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalJson;
