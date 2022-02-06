// this is a file configuration file for "semantic-release"
// in ".releaserc.js" or "release.config.js"
// you have also an optional custom template: release-template.hbs

const { readFileSync } = require('fs');
const path = require('path');

const releaseTemplate = readFileSync(path.join('.github', 'release-template.hbs'));

module.exports = {
    "branches":[
       "master",
       "main"
    ],
    "tagFormat":"${version}",
    "plugins":[
       [
          "semantic-release-gitmoji",
          {
             "releaseRules":{
                "major":[
                   ":boom:"
                ],
                "minor":[
                   ":sparkles:"
                ],
                "patch":[
                   ":art:",
                   ":zap:",
                   ":fire:",
                   ":bug:",
                   ":ambulance:",
                   ":memo:",
                   ":rocket:",
                   ":lipstick:",
                   ":tada:",
                   ":white_check_mark:",
                   ":lock:",
                   ":bookmark:",
                   ":rotating_light:",
                   ":construction:",
                   ":green_heart:",
                   ":arrow_down:",
                   ":arrow_up:",
                   ":pushpin:",
                   ":construction_worker:",
                   ":chart_with_upwards_trend:",
                   ":recycle:",
                   ":heavy_plus_sign:",
                   ":heavy_minus_sign:",
                   ":wrench:",
                   ":hammer:",
                   ":globe_with_meridians:",
                   ":pencil2:",
                   ":poop:",
                   ":rewind:",
                   ":twisted_rightwards_arrows:",
                   ":package:",
                   ":alien:",
                   ":truck:",
                   ":page_facing_up:",
                   ":bento:",
                   ":wheelchair:",
                   ":bulb:",
                   ":beers:",
                   ":speech_balloon:",
                   ":card_file_box:",
                   ":loud_sound:",
                   ":mute:",
                   ":busts_in_silhouette:",
                   ":children_crossing:",
                   ":building_construction:",
                   ":iphone:",
                   ":clown_face:",
                   ":egg:",
                   ":see_no_evil:",
                   ":camera_flash:",
                   ":alembic:",
                   ":mag:",
                   ":label:",
                   ":seedling:",
                   ":triangular_flag_on_post:",
                   ":goal_net:",
                   ":dizzy:",
                   ":wastebasket:",
                   ":passport_control:",
                   ":adhesive_bandage:",
                   ":monocle_face:",
                   ":coffin:"
                ]
             },
             "releaseNotes":{
                "template": releaseTemplate
             }
          }
       ],
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
             "publishCmd":"prerelease=`npm version --no-git-tag-version prerelease`; git commit -am \":bookmark: prepare next release $prerelease \""
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