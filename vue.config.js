module.exports = {
  "outputDir": "./docs",
  "publicPath": "/portfolio/",
  "configureWebpack": {
    "optimization": {
      "splitChunks": false
    }
  },
  "filenameHashing": false,
  "transpileDependencies": [
    "vuetify"
  ]
}