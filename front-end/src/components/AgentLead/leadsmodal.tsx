import {
    CloseButton,
    Label,
    Modal,
    ModalContent,
    ModalContentContainer,
} from "./leadsmodal.styles";
import { ILeads } from "./leads.type";

type Props = {
    onClose: () => void;
    data: ILeads;
};
const LeadsModal = (props: Props) => {
    const { onClose, data } = props;
    return (
        <div>
            <Modal id="myModal" className="modal">
                <ModalContent className="modal-content">
                    <CloseButton className="close" onClick={onClose}>
                        &times;
                    </CloseButton>
                    <h3 style={{ color: "#0570e0" }}>
                        {data.name}'s Data Records
                    </h3>
                    <br />
                    <div style={{ padding: "10px", display:"flex", flexDirection:"column"}}>
                        <ModalContentContainer>
                            <Label>Name: {data.name}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Contact Number: {data.contact_Number}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Email Address: {data.email_Address}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Business Name: {data.business_Name}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Address: {data.address}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Status: {data.status}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Subscription: {data.subscription}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Date Started: {data.started_Date}</Label>
                        </ModalContentContainer>
                        <ModalContentContainer>
                            <Label>Agent Name: {data.agent_Id}</Label>
                        </ModalContentContainer>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default LeadsModal;
