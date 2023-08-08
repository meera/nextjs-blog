module.exports = {
    basePath: '/app',

    async rewrites() {
      return [
        {
          source: '/',
          destination: 'https://my.asearch.ai',
        },
        {
            source: '/foobar',
            destination: '/foobar',
            basePath: false,

          },
      ]
    },
  }