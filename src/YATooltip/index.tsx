import React, { useMemo } from "react";

import clsx from "clsx";
import { Tooltip } from "antd";
import { TooltipProps } from "antd/lib/tooltip";

import styles from "./yaTooltip.module.less";

export type YATooltipProps = Omit<
  TooltipProps,
  "title" | "overlayClassName"
> & {
  title: string | React.ReactNode;
  overlayClassName?: string;
  isError?: boolean;
};

const YATooltip: React.FC<YATooltipProps> = ({
  title = "",
  isError = false,
  overlayClassName = "",
  ...nativeTooltipProps
}) => {
  const tooltipTitle = useMemo(() => {
    if (typeof title === "string" && title) {
      return <div className="text-grey-11">{title}</div>;
    }

    return title;
  }, [title]);

  return (
    <Tooltip
      title={tooltipTitle}
      overlayClassName={clsx(
        styles.yaTooltip,
        { [styles.error]: isError },
        overlayClassName
      )}
      {...nativeTooltipProps}
    />
  );
};

export default YATooltip;
