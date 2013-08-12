arbor_angular
=============

The code is self explanatory with comments inline. Best way to get started is to follow these steps:

1. Pull the code from the repository
2. Edit data/data.json to add nodes and edges to the graph. Follow the naming convention of the nodes. If you change the naming convention, we will have to update in many places.
3. Create a server side code which will spit out JSON data in the format as mentioned in data/data.json
4. Update the server side URL in js/services.js

If you want to update the display and show images etc, you can modify the renderer.js file in lib/renderer.js

Features to be added:
Currently, the renderer is a standalone file and included directly. This should be made into an Angular service so that we can access the scope variables and make the graph display more dynamic. Then there won't be any limitations on node names etc.

Demo :
Arborjs+AngularJs Demo Dashboard: http://ozoneteldemos.s3-website-ap-southeast-1.amazonaws.com/index.html#/graph
