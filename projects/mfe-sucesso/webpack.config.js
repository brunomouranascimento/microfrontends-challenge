const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack')

module.exports = withModuleFederationPlugin({
  name: 'mfe-sucesso',

  exposes: {
    './Component': './projects/mfe-sucesso/src/app/app.component.ts'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
})

