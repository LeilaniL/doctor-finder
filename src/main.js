import { Search } from './Search.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import stethoscope from './images/stethoscope.png';

// let stethoscopeIcon = document.getElementById("stethoscope");
// stethoscopeIcon.src = stethoscope;

$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    let nameQuery = $("#doctorName").val();
    let condition = "";
    let userSearch = new Search(nameQuery, condition);
    let promise = userSearch.GetByName();
    promise.then(function (response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        $("#name").append(`<li>${body.data[i].practices[0].name};
        </li>`);
        $("#phone").append(`<li>${body.data[i].practices[0].phones[0].number}</li>`);
        $("#address").append(`<li>${body.data[i].practices[0].phones[0].number}</li>`);
      }
    })
  })
})
