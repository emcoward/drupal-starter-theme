### Drupal Starter Theme

This is the directory for all your page templates.

Default page template can be found here :
https://api.drupal.org/api/drupal/modules!system!page.tpl.php/7

Template suggestions:
page--[type|nodeid].tpl.php

base template: page.tpl.php

Theme hook suggestions are made based on these factors, listed from the most
specific template to the least. Drupal will use the most specific template it finds:

page--[front|internal/path].tpl.php
page--node--edit.tpl.php
page--node--1.tpl.php
page--node.tpl.php

For more information see:
https://www.drupal.org/node/1089656
