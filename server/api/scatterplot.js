module.exports = {
  getScatterPlot:getScatterPlot
}

function getScatterPlot(req, res) {
    var data = [{
      "start_time": "2017-11-29T04:56:12Z",
      "status": "pass",
      "duration": 126, // in seconds
    },
    {
      "start_time": "2017-11-25T03:22:12Z",
      "status": "error",
      "duration": 75,
    },
    {
      "start_time": "2017-11-28T02:24:12Z",
      "status": "fail",
      "duration": 20,
    },
    {
      "start_time": "2017-11-23T05:24:12Z",
      "status": "pass",
      "duration": 190,
    },
    {
      "start_time": "2017-11-27T06:24:12Z",
      "status": "error",
      "duration": 140,
    },
    {
      "start_time": "2017-11-28T14:12:12Z",
      "status": "pass",
      "duration": 180,
    },
    {
      "start_time": "2017-11-25T05:22:12Z",
      "status": "error",
      "duration": 165,
    },
    {
      "start_time": "2017-11-27T08:24:12Z",
      "status": "fail",
      "duration": 20,
    },
    {
      "start_time": "2017-11-23T09:24:12Z",
      "status": "pass",
      "duration": 150,
    },
    {
      "start_time": "2017-11-29T16:24:12Z",
      "status": "error",
      "duration": 130,
    },
    {
      "start_time": "2017-11-28T04:12:12Z",
      "status": "pass",
      "duration": 200,
    },
    {
      "start_time": "2017-11-25T08:22:12Z",
      "status": "error",
      "duration": 105,
    },
    {
      "start_time": "2017-11-28T09:24:12Z",
      "status": "fail",
      "duration": 20,
    },
    {
      "start_time": "2017-11-23T11:24:12Z",
      "status": "pass",
      "duration": 60,
    },
    {
      "start_time": "2017-11-27T13:24:12Z",
      "status": "error",
      "duration": 90,
    },
    {
      "start_time": "2017-11-28T14:12:12Z",
      "status": "pass",
      "duration": 70,
    }];
    res.status(200).json(data);
}
