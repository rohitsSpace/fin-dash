import * as React from "react";
const MasterCardIcon = ({ variant = "light", ...props }) => {
  const colors = {
    light: "#fff",
    dark: "#000",
  };

  const currentColors = colors[variant] || colors.light;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={30}
      viewBox="0 0 44 30"
      fill="none"
      {...props}
    >
      <circle cx={15} cy={15} r={15} fill={currentColors} fillOpacity={0.5} />
      <circle cx={29} cy={15} r={15} fill={currentColors} fillOpacity={0.5} />
    </svg>
  );
};
export default MasterCardIcon;
