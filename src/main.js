import { Search } from './Search.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import stethoscope from './images/stethoscope.png';

// let stethoscopeIcon = document.getElementById("stethoscope");
// stethoscopeIcon.src = stethoscope;

$(document).ready(function () {
  $("#showSpecialties").click(function (event) {
    event.preventDefault();
    let specialtyPromise = Search.DisplaySpecialties();
    specialtyPromise.then(function (response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        $("#specialties").append(`<input type="radio" name="${body.data[i].name}" value="{body.data[i].uid}">
        <label for="${body.data[i].name}">
          name="${body.data[i].name}"
        </label>`);
      }
    })
  })
  $("#submitButton").click(function (event) {
    event.preventDefault();
    let nameQuery = $("#doctorName").val();
    let condition = "";
    let userSearch = new Search(nameQuery, condition);
    let promise = userSearch.GetDoctors();
    promise.then(function (response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        $("#available").append(`<li>${body.data[i].practices[0].accepts_new_patients}</li>`);
        $("#name").append(`<li>${body.data[i].practices[0].name}
        </li>`);
        $("#phone").append(`<li>${body.data[i].practices[0].phones[0].number}</li>`);
        $("#address").append(`<li>${body.data[i].practices[0].visit_address.street},

        <span>${body.data[i].practices[0].visit_address.street2},</span>

        <span>${body.data[i].practices[0].visit_address.city},</span>

        <span>${body.data[i].practices[0].visit_address.state}</span>
        </li>`);
      }
    })
  })
})

