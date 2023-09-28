import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function BuildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          // для чтения обычных scss файлов
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:8]'
          }
        },
      },
      "sass-loader",
    ],
  }

  return [
    typescriptLoader,
    cssLoader
  ]
}