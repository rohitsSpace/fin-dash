export const FORM_FIELDS = [
  { name: "name", label: "Your Name", type: "text", required: true },
  { name: "username", label: "User Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
  { name: "dob", label: "Date of Birth", type: "date", required: true },
  {
    name: "presentAddress",
    label: "Present Address",
    type: "text",
    required: true,
  },
  { name: "permanentAddress", label: "Permanent Address", type: "text" },
  { name: "city", label: "City", type: "text", required: true },
  { name: "postalCode", label: "Postal Code", type: "text" },
  { name: "country", label: "Country", type: "text", required: true },
];
