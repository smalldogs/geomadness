GeoMadness
----------

This is entirely client side javascript that is compiled from Node NPM modules
using [Webpack](https://webpack.github.io).

This is currently running at [brwnll.com/geomadness/index.html](https://www.brwnll.com/geomadness/index.html). Because this tool is entirely client side, you can host it anywhere you can put an HTML file. The previous example is a S3 bucket behind Amazon CloudFront.

Please make improvements and send back pull requests!

To Setup/Build
--------------

1. Clone the repo
2. Install the deps `npm i`
3. Install webpack
4. Run `webpack`

TODO
----

+ Update with 2017 schools
+ Auto-clear map and reset application when "run" is clicked to allow multiple
runs without a page reload.
+ Add more sample data.
+ Hide result lists until "run" is clicked.
+ Better handling of locations outside the US on map
+ Cleanup CSS and HTML
+ Simplify JS
