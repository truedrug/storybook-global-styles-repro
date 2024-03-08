import React from "react";

export interface Props {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
}

const TooltipWrapper: React.FC<Props> = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
}) => {
  return (
    <div
      onFocus={onFocus}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default TooltipWrapper;
