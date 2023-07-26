import {
  CloseButton,
  Label,
  Modal,
  ModalContent,
  ModalContentContainer,
} from "./timesheetsmodal.styles";
import { IAdminTimeSheets } from "./timesheets.type";

type Props = {
  onClose: () => void;
  data: IAdminTimeSheets;
};

const AdminTimeSheetsModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div>
      <Modal id="myModal" className="modal">
        <ModalContent className="modal-content">
          <CloseButton className="close" onClick={onClose}>
            &times;
          </CloseButton>
          <h3 style={{ color: "#0570e0" }}>
            {data.agent_name}'s Data Records
          </h3>
          <br />
          <div
            style={{ padding: "10px", display: "flex", flexDirection: "column" }}
          >
            <ModalContentContainer>
              <Label>Date: {data.date}</Label>
            </ModalContentContainer>
            <ModalContentContainer>
              <Label>Agent ID: {data.agent_id}</Label>
            </ModalContentContainer>
            <ModalContentContainer>
              <Label>Agent Name: {data.agent_name}</Label>
            </ModalContentContainer>
            <ModalContentContainer>
              <Label>Task Description: {data.task_description}</Label>
            </ModalContentContainer>
            <ModalContentContainer>
              <Label>Start Time: {data.start_time}</Label>
            </ModalContentContainer>
            <ModalContentContainer>
              <Label>End Time: {data.end_time}</Label>
            </ModalContentContainer>
            <ModalContentContainer>
              <Label>Total Hours Spent: {data.total_hours_spent}</Label>
            </ModalContentContainer>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AdminTimeSheetsModal;
