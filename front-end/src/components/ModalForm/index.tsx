import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  CloseButton,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalContent,
  Select,
} from './style';

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    date: '',
    time: '',
    phoneNumber: '',
    status: '',
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform form submission logic or API call here
      await axios.post('/api/endpoint', formData);
      console.log('Form submitted successfully');
      // Reset form data
      setFormData({
        clientName: '',
        date: '',
        time: '',
        phoneNumber: '',
        status: '',
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Form submission failed', error);
      // Handle error scenario here
    }
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>

      {isOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>x</CloseButton>

            <h2>Client Information</h2>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="clientName">Client Name:</Label>
                <Input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="date">Date:</Label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="time">Time:</Label>
                <Input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phoneNumber">Phone Number:</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="status">Status:</Label>
                <Select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option selected hidden value="">
                    Select status
                  </option>
                  <option value="For Demo">For Demo</option>
                  <option value="Done Demo">Done Demo</option>
                  <option value="Rescheduled">Rescheduled</option>
                  <option value="Cancelled">Cancelled</option>
                </Select>
              </FormGroup>

              <Button type="submit">Submit</Button>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ModalForm;