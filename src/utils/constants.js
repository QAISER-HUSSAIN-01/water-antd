export const ROLES = {
  admin: "1413914",
  user: "2119518 ",
  client: "312951420",
};

export const ROLES_MENU = [
  {
    value:'', label:'Select',
  },
  {
    value:'admin', label:'Admin',
  },
  {
    value:'user', label:'User',
  },
  {
    value:'client', label:'Client',
  }
]
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
  allow: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: "Email is not valid",
};

export const OPTIONS = [
  { value: "", label: "Select" },
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

// https://github.com/QAISER-HUSSAIN-01/restaurant.git
