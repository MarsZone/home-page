const path = require('path')
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = 'Citizen' // page title
const port = process.env.port || process.env.npm_config_port || 9527; // dev port
module.exports={
  // project deployment base
  publicPath: '/citizen/',

  // where to output built files
  //输出文件目录
  outputDir: 'citizen',

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',

  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: true,

  // transpileDependencies 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  productionSourceMap:false,
  
  configureWebpack: config => {
    config.name = name;
    config.plugins.push( new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-us/),);
    if(isProduction){
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
            // 超过4kb压缩
          threshold: 10240
        })
      )
    }
  },

  devServer: {
     port: port,
     open: true,
     overlay: {
       warnings: false,
       errors: true
     },
 },

  chainWebpack: config => {
		/**
		 * 删除懒加载模块的prefetch，降低带宽压力
		 * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
		 * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
		 */
    config.plugins.delete('preload'); // TODO: need test
		config.plugins.delete('prefetch');
		//if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
		//} else {// 为开发环境修改配置...
    //}
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.resolve.alias
      .set('@', resolve('/src'))
      .set('assets',resolve('/src/assets'))
      .set('components',resolve('/src/components'))
      .set('layout',resolve('/src/layout'))
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
	},

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
