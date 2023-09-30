import webpack from "webpack";
import {BuildWebpackconfig} from "./config/build/buildWebpackconfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";




export default (env:BuildEnv) =>{
  console.log(env)

  const paths:BuildPaths ={
    entry:path.resolve(__dirname,'src','index.tsx'),
    html:path.resolve(__dirname, 'public', 'index.html'),
    build:path.resolve(__dirname, 'build'),
    src:path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || "development"
  const isDev = mode === "development"
  const PORT = env.port || 3000

  console.log(env.mode)
  const config:webpack.Configuration = BuildWebpackconfig({
    mode:mode,
    paths,
    isDev,
    port:PORT
  })

  return config
}