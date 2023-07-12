const path = require("path");

module.exports = {
  devServer: {
    proxy: "http://localhost 8080"
  },

  outputDir: path.resolve(__dirname, "../src/main/resources/static"),

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
}