CLI Project Manager
============

[![Known Vulnerabilities](https://snyk.io/test/github/activenode/project-butler/badge.svg)](https://snyk.io/test/github/activenode/project-butler)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


Build status *master* | Build status *develop* 
--- | --- |
[![activenode](https://circleci.com/gh/activenode/project-butler/tree/master.svg?style=shield)](https://circleci.com/gh/activenode/project-butler/tree/master) | [![activenode](https://circleci.com/gh/activenode/project-butler/tree/develop.svg?style=shield)](https://circleci.com/gh/activenode/project-butler/tree/develop)


## Preamble / Troubleshooting
As many developers are using different node versions it is *highly recommended* that you work with the precompiled version of this project. This will be fetched **automagically** if you run a **Linux** or **Mac** System.


# Installation

1. Install package `npm -g install project-butler`
2. Make sure to call the installer to make shell calls `project-butler --install`
3. DONE. You can use it now by calling `p`


# Usage

```
$ p [options] [COMMAND] [args]

Commands:
    p                             | list available projects
    p add                         | adds current directory to projects
    p remove project-name         | adds current directory to projects
    p cd project-name             | opens the given project 
    p project-name                | opens the given project (shortcut for `p cd`)
    p script-name                 | if inside a project you can trigger a script with this

    p --help                      | show help menu
```

## Adding and switching projects:
[![asciicast](https://asciinema.org/a/bsXRoeCYhOjobDCo698xwU33D.svg)](https://asciinema.org/a/bsXRoeCYhOjobDCo698xwU33D)
