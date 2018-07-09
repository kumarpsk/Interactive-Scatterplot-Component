var router = require('express').Router();
var scatterPlotApi = require('../api/scatterplot.js')

router.get("/getscatterplotdata",scatterPlotApi.getScatterPlot);

module.exports = router;
