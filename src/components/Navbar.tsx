import { IoGrid } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="bg-white/30 backdrop-opacity-10 rounded p-2">
        <IoGrid />
      </span>
      <span>home</span>
      <span>search</span>
    </div>
  );
};
