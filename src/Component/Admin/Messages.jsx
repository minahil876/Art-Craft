import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleDelete = (id) => {
    axios.delete(`http://192.168.12.103:8002/crafters/contact/${id}/`)
      .then((res) => {
        console.log('Message deleted:', res);
        setMessages(messages.filter(message => message.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get('http://192.168.12.103:8002/crafters/contact/')
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleView = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Messages</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.id}</td>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.subject}</td>
              <td>{message.message}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleView(message)}
                  className="me-2"
                >
                  View
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(message.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedMessage && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Message Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>ID:</strong> {selectedMessage.id}</p>
            <p><strong>Name:</strong> {selectedMessage.name}</p>
            <p><strong>Email:</strong> {selectedMessage.email}</p>
            <p><strong>Subject:</strong> {selectedMessage.subject}</p>
            <p><strong>Message:</strong> {selectedMessage.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Messages;
