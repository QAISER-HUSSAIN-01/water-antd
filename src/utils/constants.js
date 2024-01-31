export const ALPHANUMERIC = {
  allow: /^[a-zA-Z0-9 ]+$/,
  message: "Only alphanumeric characters are allowed",
};
export const ALPHABET = {
  allow: /^[a-zA-Z ]+$/,
  message: "Only alphabet characters are allowed",
};
export const NUMERIC = {
  allow: /^[0-9]+$/,
  message: "Only numbers are allowed",
};
export const DECIMAL = {
  allow: /^[0-9]+(\.[0-9]+)?$/,
  message: "Only decimal numbers are allowed",
};

export const EMAIL = {
  allow:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message:'Email is not valid'
}




// https://github.com/QAISER-HUSSAIN-01/restaurant.git