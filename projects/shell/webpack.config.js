const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack')

module.exports = withModuleFederationPlugin({
  remotes: {
    mfeCadastro: 'mfeCadastro@http://localhost:4201/remoteEntry.js',
    mfeSucesso: 'mfeSucesso@http://localhost:4202/remoteEntry.js'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
})

