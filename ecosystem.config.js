module.exports = {
  apps: [
    {
      name: 'ao20-web',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
          "PORT": 11817,
          "NODE_ENV": "development"
      }
    }
  ]
}
