import React from "react";

import { Meta, StoryFn as Story } from "@storybook/react";

import YADivider, { YADividerProps } from ".";

export default {
  title: "Components/Divider",
  component: YADivider,
} as Meta;

const Template: Story<YADividerProps> = (args) => <YADivider {...args} />;

export const LowImportance = Template.bind({});
LowImportance.args = {
  variant: "low",
};

export const HighImportance = Template.bind({});
HighImportance.args = {
  variant: "high",
};
