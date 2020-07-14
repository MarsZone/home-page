// vue.config.js
const webpack = require('webpack');
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // options...
  
  productionSourceMap: false,
  assetsDir: 'vasset',
  lintOnSave: undefined,
  chainWebpack: config => {
    config
        .plugin('provide')
        .use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }]);
    config.resolve.alias
        .set('@', resolve('/src'))
        .set('assets',resolve('/src/assets'))
        .set('components',resolve('/src/components'))
        .set('layout',resolve('/src/layout'))
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    },
    moment: {
      locales: [
        'en'
      ]
    }
  },

  devServer: {
    disableHostCheck: true,
    port: 8808  // 此处修改你想要的端口号，
  }
  
}
