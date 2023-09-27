import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function BuildLoaders(options:BuildOptions):webpack.RuleSetRule[] {

  const typescriptLoader ={
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
    const cssLoader ={
        test: /\.s[ac]ss$/i,
        use: [
         options.isDev? 'style-loader' :MiniCssExtractPlugin.loader,
          {
           loader: "css-loader",
            options:{
              modules:true
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