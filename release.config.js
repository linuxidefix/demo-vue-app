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
             "publishCmd":"prerelease=`npm version --no-git-tag-version prerelease`; git add 'package.json'; git commit -m \":bookmark: prepare next release $prerelease \""
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