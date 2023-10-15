import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {BuildPlugins} from "./buildPlugins";
import {BuildLoaders} from "./buildLoaders";
import {BuildResolve} from "./buildResolve";
import {BuildDevServer} from "./buildDevServer";

export function BuildWebpackconfig(options:BuildOptions): webpack.Configuration {
  const {paths,mode,isDev,port}=options

  return {
    mode:mode,
    entry:paths.entry ,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    devtool:isDev? 'inline-source-map': undefined,
    plugins:BuildPlugins(options),
    module: {
      rules:BuildLoaders(options)
    },
    resolve: BuildResolve(options),
    devServer: isDev? BuildDevServer(options): undefined,
  };
}