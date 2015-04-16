New-Item -ItemType Directory -Force -Path public
cp src/index.html public/
cp node_modules/angular2/node_modules/zone.js/zone.js public/
cp node_modules/whatwg-fetch/fetch.js public/