const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
var PeerDepsExternalsPlugin = require("./peer-deps-externals-webpack-plugin");
const {
  getCSSLoaderConfig,
  getLessLoaderConfig,
} = require("../build-helpers/loaders");
const { getTSLoaderConfig } = require("../build-helpers/loaders");
const DeleteSelectiveDeclarationFiles = require("./delete-selective-declaration-files");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const isAnalyzeMode = process.env.ANALYZE_MODE === "true";

// Delete unwanted declaration files
const files = ["__tests__", "test-utils.d.ts", "theme", "**/*.stories.d.ts"];

const plugins = [
  new MiniCssExtractPlugin({
    filename: "spectrum.css",
  }),
  new PeerDepsExternalsPlugin(),
  new DeleteSelectiveDeclarationFiles(files),
];

const cssLoadersInOrder = [
  MiniCssExtractPlugin.loader,
  getCSSLoaderConfig("dummy"),
  "postcss-loader",
];

if (isAnalyzeMode) {
  plugins.push(new BundleAnalyzerPlugin());
}

const rootDir = path.resolve(__dirname, "..");

const baseConfig = {
  mode: "production",
  devtool: "source-map",
  plugins,
  entry: {
    index: path.resolve(rootDir, "./src/index.ts"),
    "types/index": path.resolve(rootDir, "./src/types/index.ts"),
  },
  context: path.resolve(rootDir, "src"),
  resolve: {
    plugins: [new TsConfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      getTSLoaderConfig(),
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [...cssLoadersInOrder],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [...cssLoadersInOrder, getLessLoaderConfig()],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin({}),
    ],
  },
};

const umd = Object.assign({}, baseConfig, {
  output: {
    path: path.resolve(rootDir, "lib/umd"),
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
});

const esm = Object.assign({}, baseConfig, {
  output: {
    path: path.resolve(rootDir, "lib/es"),
    filename: "[name].js",
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
});

module.exports = [umd, esm];
