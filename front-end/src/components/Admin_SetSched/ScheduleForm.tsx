import { Border, Card, Check, Container, FooterButton, Forms, Split, StyledButton, Title } from "./styles";
import { useState } from 'react';
import Modal from 'react-modal';

export default function SchedForm() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const [details, setDetails] = useState({
        EventTitle: "",
        description: "",
        startDate: "",
        endDate: "",
        notif: "",
        notifTime: "",
        pubEvent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value, type, checked } = e.target;

        setDetails((prev) => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(details);
    };

    return (
        <Container>
            <StyledButton onClick={openModal}>Open Modal</StyledButton>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal">
                <Card>
                    <Title>Add new schedule</Title>

                    <Forms onSubmit={handleSubmit}>
                        <label htmlFor="EventTitle">&#x2022; Event Title</label>
                        <input type="text" id="EventTitle" value={details.EventTitle} onChange={handleChange} />

                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows={9} cols={50} value={details.description} onChange={handleChange}></textarea>

                        <label htmlFor="startDate">&#x2022; Start Date</label>
                        <input type="datetime-local" id="startDate" value={details.startDate} onChange={handleChange} />

                        <label htmlFor="endDate">End Date</label>
                        <input type="datetime-local" id="endDate" value={details.endDate} onChange={handleChange} />

                        <label htmlFor="notif">&#x2022; Notification</label>
                        <Split>
                            <input type="number" placeholder="30" id="notif" value={details.notif} onChange={handleChange} />
                            <select id="notifTime" value={details.notifTime} onChange={handleChange}>
                                <option value="" disabled hidden>Minutes</option>
                                <option value="Minutes">Minutes</option>
                                <option value="Hours">Hours</option>
                                <option value="Days">Days</option>
                                <option value="Weeks">Weeks</option>
                            </select>
                        </Split>

                        <Border>
                            <Check>
                                <input type="checkbox" id="pubEvent" checked={details.pubEvent} onChange={handleChange} />
                                <label htmlFor="pubEvent">Public Event</label>
                            </Check>
                        </Border>

                        <FooterButton>
                            <StyledButton style={{ color: '#fff' }} onClick={closeModal}>CLOSE</StyledButton>
                            {/* <StyledButton>
                                <a  href="/admindashboard">CLOSE</a>
                            </StyledButton> */}
                            <StyledButton style={{ backgroundColor: '#333db7', color: '#fff' }} type="submit" id="Save">
                                Save
                            </StyledButton>
                        </FooterButton>
                    </Forms>
                </Card>
            </Modal>
        </Container>
    );
}
