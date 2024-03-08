import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx", "../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.module\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: `${"prefix"}__[local]--[hash:base64:5]`,
                  },
                },
              },
              {
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
            ],
          },
          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
            ],
          },

          {
            test: /\.module\.less$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: `${"prefix"}__[local]--[hash:base64:5]`,
                  },
                },
              },
              {
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
              {
                loader: "less-loader",
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                    math: "always",
                  },
                },
              },
            ],
          },
          {
            test: /\.less$/,
            exclude: /\.module\.less$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
              {
                loader: "less-loader",
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                    math: "always",
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
