module.exports = {
  apps: [
    {
      name: 'ao20-web',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
          "PORT": 11812,
          "NODE_ENV": "development"
      }
    }
  ]
}
