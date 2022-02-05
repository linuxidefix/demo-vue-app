// this is a file configuration file for "semantic-release"
// in ".releaserc.js" or "release.config.js"

module.exports = {
  branches: ['master', 'main'],
  plugins: [
    'semantic-release-gitmoji',
    '@semantic-release/github',
    [
        "@semantic-release/npm",
        {
          "npmPublish": false
        }
      ]
  ]
}