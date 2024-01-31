import { notification } from "antd";
export default function Notifications() {
  const SuccessNotification = (description) => {
    notification.success({
      message: "Success",
      description: description,
      placement: "topRight",
      duration: 5,
    });
  };
  const WarningNotification = (description) => {
    notification.warning({
      message: "Warning",
      description: description,
      placement: "topRight",
      duration: 5,
    });
  };
  const InfoNotification = (description) => {
    notification.info({
      message: "Info",
      description: description,
      placement: "topRight",
      duration: 5,
    });
  };
  const ErrorNotification = (description) => {
    notification.error({
      message: "Error",
      description: description,
      placement: "topRight",
      duration: 5,
    });
  };
  return {
    SuccessNotification,
    WarningNotification,
    InfoNotification,
    ErrorNotification,
  };
}
