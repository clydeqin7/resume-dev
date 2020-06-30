const px2rem = require("postcss-plugin-px2rem");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/resume/" : "/",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            // postcss-plugin-px2rem 默认配置
            rootValue: 100,
            unitPrecision: 5,
            propWhiteList: [],
            propBlackList: [],
            exclude: /node_modules/,
            selectorBlackList: [],
            ignoreIdentifier: false,
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
          })
        ]
      }
    }
  }
};
