import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { buildDevServers } from './buildDevServers'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolves(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServers(options) : undefined
  }
};
