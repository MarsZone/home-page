// vue.config.js
module.exports = {
  // options...
  assetsDir: 'vasset',

  lintOnSave: undefined,

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
