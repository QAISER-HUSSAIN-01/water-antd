import { notification } from "antd";
  export const SuccessNotification = (description) => {
    notification.success({
      message: "Success",
      description: description,
      placement: "topRight",
      duration: 2,
    });
  };
  export const WarningNotification = (description) => {
    notification.warning({
      message: "Warning",
      description: description,
      placement: "topRight",
      duration: 5,
    });
  };
  export const InfoNotification = (description) => {
    notification.info({
      message: "Info",
      description: description,
      placement: "topRight",
      duration: 5,
    });
  };
  export const ErrorNotification = (description) => {
    notification.error({
      message: "Error",
      description: description,
      placement: "topRight",
      duration: 5,
    });
  };

