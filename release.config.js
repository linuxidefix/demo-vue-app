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
          "@semantic-release/exec",
          {
             "publishCmd":"npm version --no-git-tag-version prerelease -m \":bookmark: prepare next release %s\" "
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