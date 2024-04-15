import React from "react";
interface IProps {
  children: React.ReactNode;
}

export const MainAppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="text-white text-center w-full bg-gradient-to-b
     from-indigo-700 from-45% to-purple-400 h-[100vh] px-4 pt-2">
      {children}
    </div>
  );
};
