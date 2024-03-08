import type { Preview } from "@storybook/react";

/* Global styles that will be applicable to all stories */
import "antd/dist/antd.css";
import "tailwindcss/tailwind.css";
import "./global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
