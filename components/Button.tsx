import { ReactNode, FC } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
    >
      {children}
    </button>
  );
};

export default Button;
