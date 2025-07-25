const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack')

module.exports = withModuleFederationPlugin({
  name: 'mfe-cadastro',

  exposes: {
    './Component': './projects/mfe-cadastro/src/app/app.component.ts'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
})

