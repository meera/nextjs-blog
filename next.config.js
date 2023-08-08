module.exports = {
    async rewrites() {
      return [
        {
          source: '/about',
          destination: '/foobar',
        },
        {
            source: '/blog',
            destination: 'https://my.asearch.ai',
          },
      ]
    },
  }