import React, { forwardRef, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
// import { Location } from "history";

interface IProps {
  onClick?: React.ReactEventHandler;
  to?: string;
  passHref?: boolean;
  anchor?: boolean;
  children?: ReactNode;
  className?: string;
}

const ApLink = forwardRef<HTMLDivElement, IProps>(
  ({ to = "#", passHref = false, children, className, ...rest }, ref) => {
    const { pathname } = useLocation();
    const isActive = to === pathname;
    const isExternalLink = to.includes("http")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link
        to={to}
        {...(passHref ? { href: to } : {})}
        {...rest}
        {...isExternalLink}
      >
        <div
          ref={ref}
          className={classNames(
            "hover:text-sec relative group w-fit transition duration-200 text-white",
            className,
            {
              "text-pri": isActive,
            }
          )}
        >
          {children}
        </div>
      </Link>
    );
  }
);

ApLink.displayName = "ApLink";
export default ApLink;
