class Services {
  static getScatterPlotData(callback) {
    fetch('http://localhost:8080/api/getscatterplotdata').then((result) => result.json()).then((response) => callback(response));
  }
}
export default Services;
