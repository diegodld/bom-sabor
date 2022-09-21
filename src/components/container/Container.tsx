import React from "react";

interface Props {
  customClass?: string;
}

const Container: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({
  children,
  customClass = "",
}) => {
  return <div className={"container " + customClass}>{children}</div>;
};

export default Container;
