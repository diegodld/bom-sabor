import React from "react";

interface Props {
  children?: JSX.Element;
  className?: JSX.ElementClass;
}

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className="container" {...props}>
      {props.children}
    </div>
  );
};

export default Container;
