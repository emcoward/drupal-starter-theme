#
# Compass configuration file.
# Read more about Compass configuration options here:
# http://compass-style.org/help/documentation/configuration-reference/
#

# Add a path to the list of sass import paths.
# add_import_path "../THEME/sass"
add_import_path "../eden/scss"

# Require any additional compass plugins here.
require 'susy'

environment = :development
# environment = :production

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "images"
javascripts_dir = "js"
fonts_dir = "fonts"

# Set the preferred output style.
output_style = (environment == :development) ? :expanded : :compressed

# Disable debugging comments that display the original location of selectors.
line_comments = (environment == :development) ? true : false

# Indicates whether the compass helper functions should generate relative urls
# from the generated css to assets, or absolute urls using the http path for
# that asset type.
relative_assets = true

# By default, Compass will append a time stamp to URLs to prevent browser caching
# on images and other assets.
# Uncomment to disable this feature.
# asset_cache_buster :none

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass stylesheets scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
