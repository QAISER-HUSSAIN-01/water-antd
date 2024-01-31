import { Modal, Row } from "antd";
import { WarningFilled, InfoCircleFilled } from "@ant-design/icons";
import ButtonComponent from "./ButtonComponent";

export const confirm = (message,onOk) =>
  Modal.confirm({
    centered: true,
    title: "Confirmation!",
    content: message || "Are you sure you want to delete ?",
    onOk: onOk,
  });

export const warning = (prop) =>
  Modal.warning({
    centered: true,
    title: "Warning!",
    content: prop,
  });

export const error = (prop) =>
  Modal.error({
    centered: true,
    title: "Error!",
    content: prop,
  });

export const CustomModal = ({ open, setOpen, type }) => {
  const onOk = () => {
    if (type == "confirmation") {
      // proceed with your function
    } else {
      onCancel();
    }
  };
  const onCancel = () => {
    setOpen(!open);
  };
  return (
    <Modal
      centered
      open={open}
      onCancel={onCancel}
      footer={() => (
        <Row justify={"center"}>
          <ButtonComponent
            text={type == "confirmation" ? "Confirm" : "Ok"}
            handleClick={onOk}
            type={"primary"}
          />
          {type == "confirmation" && (
            <ButtonComponent
              text={"Close"}
              handleClick={onCancel}
              type={"default"}
            />
          )}
        </Row>
      )}
    >
      <Row justify={"center"} className="mt-5">
        <WarningFilled className={`modal-icon ${type}`} />
      </Row>
      <h2 className="text-center capitalize line-height-1">{type}</h2>
      <p className="text-center my-4">
        {" "}
        A message whatever you want to write...?
      </p>
    </Modal>
  );
};
