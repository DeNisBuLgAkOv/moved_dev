import {BuildOptions} from "./types/config";

export function BuildResolve(options:BuildOptions){


  return{
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute:true,
    modules:[options.paths.src, 'node_modules'],
    mainFiles:['index'],
    alias:{}
  }

}