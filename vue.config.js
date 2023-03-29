const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'node_modules/cesium/Build/Cesium/Workers', to: 'Workers' },
          { from: 'node_modules/cesium/Build/Cesium/ThirdParty', to: 'ThirdParty' },
          { from: 'node_modules/cesium/Build/Cesium/Assets', to: 'Assets' },
          { from: 'node_modules/cesium/Build/Cesium/Widgets', to: 'Widgets' },
          { from: 'node_modules/cesium/Build/Cesium/Documentation', to: 'Documentation' }
        ]
      })
    ]
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-app/'
    : '/'
}
