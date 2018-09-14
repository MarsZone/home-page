// vue.config.js
const webpack = require('webpack');

module.exports = {
  // options...
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
