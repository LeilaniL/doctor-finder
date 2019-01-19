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
    let conditionQuery = $("#condition").val();
    let userSearch = new Search(nameQuery, conditionQuery);
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

