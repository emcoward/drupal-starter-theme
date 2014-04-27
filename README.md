# Drupal setup

This is a starting point for Drupal 7 theme development.

* Copy the 'drupalstartertheme' folder into 'sites/all/themes' and rename it to 'yourthemename'.
* Rename 'drupalstartertheme.info' to 'yourthemename.info'. Edit this file to enter your theme name and description.
* In 'template.php' replace all instances of 'drupalstartertheme' with 'yourthemename'.
* In 'src/js/init.js' replace all instances of 'drupalstartertheme' with 'yourthemename'.
* Replace 'screenshot.png' with a screenshot of your theme.


# Grunt setup

Install the global node.js packages (this can be run from any directory):

```bash
$ npm install -g grunt-cli
# => if you have used grunt before you probably have this
```

From 'yourthemename' directory install the node packages for the theme:

```bash
$ npm install
# => once done you can check by running `npm list` to see all project packages
```

## Grunt tasks

There are 3 grunt tasks for the theme.

* grunt watch
* grunt build
* grunt production


### Watch

Running grunt (with watcher) will watch for any changes and recompile - best used during development:

```bash
$ grunt
# => This should return `Done, without errors [...] waiting...`
# => It is now ready to watch for any file changes and re-compile
```

### Build

This will compile the source files (uncompressed and with debug info):

```bash
$ grunt build
# => This should return `Done, without errors`
# => All tasks should have been run and compiled once
```

### Production

This will compile the source files compressed and without debug info.

```bash
$ grunt production
# => This should return `Done, without errors`
# => All tasks should have been run and compiled once
```


# Editor config

Download a plugin for your text editor (http://editorconfig.org/#download) in order to use the 'editorconfig' which is part of this theme.



