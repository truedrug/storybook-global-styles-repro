import React from "react";

import clsx from "clsx";

import styles from "./YADivider.module.less";

export interface YADividerProps extends React.HTMLProps<HTMLHRElement> {
  className?: string;
  variant?: "low" | "high";
}

const YADivider: React.FC<YADividerProps> = ({
  variant = "low",
  className,
  ...rest
}) => {
  const dividerClassName = clsx(
    styles["ya-divider"],
    {
      [styles[`ya-divider-${variant}`]]: variant,
    },
    className
  );

  return <hr data-variant={variant} className={dividerClassName} {...rest} />;
};

export default YADivider;
