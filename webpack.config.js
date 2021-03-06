const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prod = process.env.NODE_ENV === "production";

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: "./styles/[name].[contenthash].css"
    }),
];
const isAnalyzingBundle = process.env.BUNDLE_ANALYZE !== undefined
if (isAnalyzingBundle) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist/',
        filename: "[name].[contenthash].js",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "node_vendors",
                    test: /node_modules/,
                    chunks: "all"
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    devtool: prod ? undefined : 'source-map',
    plugins
}