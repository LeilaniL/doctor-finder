import { API_KEY } from '../.env';
export class Search {
  constructor(drName, condition) {
    this.drName = drName;
    this.condition = condition
    this.results = [];

  }
  GetByName() {
    return new Promise((resolve, reject) => {
      let that = this;
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.drName}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=${API_KEY}`;

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
