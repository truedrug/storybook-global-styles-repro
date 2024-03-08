exports.getCSSLoaderConfig = (prefix) => ({
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: `${prefix || "prefix"}__[local]--[hash:base64:5]`,
    },
  },
});

exports.getTSLoaderConfig = () => ({
  test: /\.(ts|tsx)$/,
  use: "ts-loader",
  exclude: /node_modules/,
});

exports.getLessLoaderConfig = () => ({
  loader: "less-loader",
  options: {
    lessOptions: {
      javascriptEnabled: true,
      math: "always",
    },
  },
});
