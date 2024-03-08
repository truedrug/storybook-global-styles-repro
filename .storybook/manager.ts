import { create } from "@storybook/theming";
import { addons } from "@storybook/manager-api";

const theme = create({
  base: "light",
  brandUrl: "https://yellow.ai/",
  brandImage:
    "https://yellow.ai/wp-content/themes/yellow.ai/img/yellow-ai-logo.svg",
  brandTarget: "_target",
});

addons.setConfig({ theme });
