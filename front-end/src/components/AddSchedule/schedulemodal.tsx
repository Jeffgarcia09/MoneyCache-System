import {
    CloseButton,
    Label,
    Modal,
    ModalContent,
    ModalContentContainer,
} from "./schedulemodal.styles";
import { ISchedule } from "./schedule.type";

type Props = {  
    onClose: () => void;
    data: ISchedule;
};
const ScheduleModal = (props: Props) => {
    const { onClose, data } = props;
    return (
        <div>
            <Modal id="myModal" className="modal">
                <ModalContent style={{ backgroundColor: "rgb(193, 236, 195)" }} className="modal-content">
                    <CloseButton className="close" onClick={onClose}>
                        &times;
                    </CloseButton>
                    <h3 style={{ color: "#0570e0" }}>
                        {data.client_name}'s Data Records
                    </h3>
                    <br /> 
                    <div style={{ fontWeight: "bold", padding: "10px", display:"flex", flexDirection:"column" }}>
                        <ModalContentContainer>
                            <Label>Client Name: {data.client_name}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Date: {data.date}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Time {data.time}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Status: {data.status}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Reasons: {data.reason}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Contact: {data.contact}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Email: {data.email}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Agent: {data.agent_id}</Label>
                        </ModalContentContainer>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ScheduleModal;
