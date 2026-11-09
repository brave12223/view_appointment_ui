import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  align?: "left" | "center" | "right";
}

const Button = ({ children, onClick, color = "primary", align }: Props) => {
  return (
    <button
      className={"btn btn-" + color + (align ? " float-" + align : "")}
      style={{
        position: align ? "absolute" : undefined,
        [align === "left" ? "left" : align === "right" ? "right" : "left"]:
          align === "center" ? "50%" : 0,
        transform: align === "center" ? "translateX(-50%)" : undefined,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
