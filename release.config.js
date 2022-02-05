// this is a file configuration file for "semantic-release"
// in ".releaserc.js" or "release.config.js"

module.exports = {
    "branches":[
       "master",
       "main"
    ],
    "tagFormat":"${version}",
    "plugins":[
       "semantic-release-gitmoji",
       "@semantic-release/github",
       [
          "@semantic-release/npm",
          {
             "npmPublish":false
          }
       ],
       [
          "@semantic-release/git",
          {
             "assets":[
                "package.json"
             ],
             "message":":bookmark: ${nextRelease.version}\n\n${nextRelease.notes}\n\nskip-checks: true"
          }
       ]
       
    ]
 }