import { data } from "./db.js";

var app = new Vue({
  el: "#app", //our CSS id selector
  data: {
    //reference for information to be used by Vue in virtual DOM
    items: data,
    shopping: ""
  }
});

var submitKey = document.getElementById("keyInput");

submitKey.addEventListener("keyup", function() {
  var search = submitKey.value;
  getItems(search);
  displayItems();
});

function getItems(value) {
  var items = [];
  for (var key in data) {
    if (data[key].toLowerCase().includes(value.toLowerCase())) {
      items.push(`${key}: ${data[key]}`);
    }
  }
  app.items = items;
}
