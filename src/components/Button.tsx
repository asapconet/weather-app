import classNames from "classnames";
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

interface IProps {
  leftIcon?: "arrow" | "chevron";
  rightIcon?: "arrow" | "chevron";
  isDisabled?: boolean;
  ghost?: boolean;
  asLink?: string;
  children: React.ReactNode;
  variant?: string;
  size?: string;
  className?: string;
  onClick?: () => void;
}

const ApButton = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      leftIcon,
      isDisabled,
      rightIcon,
      ghost,
      asLink,
      children,
      variant = "pri",
      size = "sm",
      className,
      ...rest
    },
    ref
  ) => {
    const icon: Record<string, JSX.Element> = {
      arrow: <BsArrowRight className="text-white" />,
      chevron: <BsChevronRight className="text-white" />,
    };

    const handleClick = () => {
      rest?.onClick?.();
    };

    return (
      <>
        <button
          ref={ref}
          disabled={isDisabled}
          {...rest}
          onClick={handleClick}
          className={classNames(
            "flex items-center max-w-max justify-center border border-pri",
            className
          )}
        >
          {leftIcon && <span>{icon[leftIcon]}</span>}
          <span
            className={classNames("block text-white py-[.55rem] px-3", {
              "ml-1": leftIcon,
              "mr-0": rightIcon,
            })}
          >
            {children}
          </span>
          {rightIcon && <span className="pr-2">{icon[rightIcon]}</span>}
        </button>
        {asLink && (
          <Link to={asLink} className="sr-only">
            Hidden Link
          </Link>
        )}
      </>
    );
  }
);

ApButton.displayName = "ApButton";

export default ApButton;
