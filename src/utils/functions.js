export const checkValidation = (value, validation) => {
  let sanitized = "";
  switch (validation) {
    case "alphabet":
      sanitized = value.replace(/[^A-Za-z\s]/g, "");
      break;
    case "alphanumeric":
      sanitized = value.replace(/[^A-Za-z0-9\s]/g, "");
      break;
    case "numeric":
      sanitized = value.replace(/[^0-9]/g, "");
      break;
    default:
      sanitized = value;
      break;
  }
  return sanitized;
};

export const encrypt = (data) => {};
export const decrypt = (data) => {};
export const getLocalItem = (key) => localStorage.getItem(key);
export const setLocalItem = (key, value) => localStorage.setItem(key, value);
export const removeLocalItem = (key, value) => localStorage.removeItem(key);
