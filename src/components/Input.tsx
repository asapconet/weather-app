import classNames from "classnames";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface IProps {
  size?: "lg" | "md" | "sm";
  textarea?: boolean;
  errors?: string;
  label?: string;
  rightIcon?: string;
  ref?: any;
  value: any;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange: () => void;
}

const ApInput = ({
  size = "lg",
  textarea,
  errors,
  label,
  ref,
  value,
  onChange,
  className,
  ...rest
}: IProps) => {
  
  const icons: any = {
    search: <BsSearch />,
  };

  return (
    <div className="w-full text-left">
      {label && (
        <label
          htmlFor={rest?.name}
          className="text-[.85rem] font-[500] text-gray-800"
        >
          {label}
        </label>
      )}
      <div className="relative w-full my-1">
        <input
          ref={ref}
          id={rest.name || ""}
          type={rest.type}
          value={value}
          onChange={onChange}
          className={classNames(
            "outline-none rounded-md h-[2.5rem] w-full px-2 py-2 placeholder:text-[.83rem] border-[1px] border-gray-300",
            className
          )}
          {...rest}
        />
      </div>
      {errors && (
        <span className="block mt-2 paragraph-1 text-err-500">{errors}</span>
      )}
    </div>
  );
};

export default ApInput;
