export class Search {
  constructor(drName, specialty) {
    this.drName = drName;
    this.specialty = specialty
    this.results = [];

  }
  GetDoctors() {
    return new Promise((resolve, reject) => {
      // console.log(apiKey);
      let that = this;
      let request = new XMLHttpRequest();
      let url = "";

      if (that.drName != "" && that.specialty != "") {
        // if user searches by both name and specialty
        url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.drName}&specialty_uid=${this.specialty}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      } else if (that.drName != "") {
        // if user searches by name
        url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.drName}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      } else if (that.specialty != "") {
        // if user searches by specialty
        url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${this.specialty}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
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
