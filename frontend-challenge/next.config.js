const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: { esmExternals: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    })
    return config
  },
  assetPrefix: '/'
}
