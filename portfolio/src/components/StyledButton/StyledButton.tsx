import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  download?: boolean;
}

const CustomButton = styled("a")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  href,
  target,
  download,
}) => {
  return (
    <CustomButton
      onClick={onClick}
      href={href}
      target={target}
      download={download}
    >
      {children}
    </CustomButton>
  );
};

export default StyledButton;