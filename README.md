g.Raphael code packaged as an NPM package. After building, you may
include each file individual if you're in a browser environment.
Alternatively, you can `require()` it and get the various classes.

Example:
```
graphael = require('graphael');

Raphael = graphael.Raphael;
gRaphael = graphael.graphael;
gRaphaelDotChart = graphael.dotchart;
gRaphaelBarChart = graphael.barchart;
gRaphaelLineChart = graphael.linechart;
gRaphaelPieChart = graphael.piechart;
```
