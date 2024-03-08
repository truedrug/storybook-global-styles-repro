import React from "react";

import { Meta, StoryFn as Story } from "@storybook/react";

import YATooltip, { YATooltipProps } from ".";

export default {
  title: "Components/Tooltip",
  component: YATooltip,
} as Meta;

const Template: Story<YATooltipProps> = (args) => <YATooltip {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Sample title",
  children: "Hover on me",
};

export const ErrorState = Template.bind({});

ErrorState.args = {
  title: "Sample title",
  children: "Error: Hover on me",
  isError: true,
};
