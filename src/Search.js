export class Search {
  constructor(drName, condition) {
    this.drName = drName;
    this.condition = condition;
    this.results = [];

  }
  GetDoctors() {
    return new Promise((resolve, reject) => {
      let that = this;
      let request = new XMLHttpRequest();
      let url = "";
      // search by both condition and doctor name
      if (this.drName != "" && this.condition != "") {
        url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.drName}&query=${that.condition}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
      }
      // search by condition
      else if (this.drName == "") {
        url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${that.condition}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
      } else {
        // search by name of doctor
        url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.drName}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
      }
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
          that.results.push(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
