# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Releasing

build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests

## Links

https://github.com/semantic-release/semantic-release

## How to setup

```
npm install @semantic-release -D
```

- check package.json

```
{
"scripts": {
    "semantic-release": "semantic-release"
  },
   "devDependencies": {
    "@semantic-release/changelog": "^6.0.1",
    "@semantic-release/git": "^10.0.1",
    "semantic-release": "^19.0.2",
  },
 "repository": {
    "type": "git",
    "url": "https://github.com/linuxidefix/demo-vue-app.git"
  }
}
```



```
npm install @semantic-release/git @semantic-release/changelog -D
```
> Already installed plugins:
```
"@semantic-release/commit-analyzer"
"@semantic-release/release-notes-generator"
"@semantic-release/npm"
"@semantic-release/github"
```

## How to configure
- create 
``` .releaserc.json```


```
{
    "branches": [
      "main","master"
    ],
    "tagFormat": "${version}",
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      [
        "@semantic-release/npm",
        {
          "npmPublish": false
        }
      ],
      [
        "@semantic-release/git",
        {
          "assets": [
            "package.json",
            "CHANGELOG.md"
          ],
          "message": "chore(release): bumping to ${nextRelease.version} \n\n${nextRelease.notes}"
        }
      ]
    ]
  }
 ``` 