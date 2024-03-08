const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { getTSLoaderConfig } = require("../build-helpers/loaders");

const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
    }),
    new CssMinimizerPlugin({}),
  ],
};

module.exports = async ({ config, mode }) => {
  const isProd = mode === "production";

  return {
    ...config,
    module: {
      ...config.module,
      rules: [...config.module.rules, getTSLoaderConfig()],
    },
    resolve: {
      ...config.resolve,
      plugins: [...(config?.resolve?.plugins || []), new TsConfigPathsPlugin()],
    },
    optimization: {
      ...config.optimization,
      ...(isProd ? optimization : {}),
    },
  };
};
