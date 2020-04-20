// from data.js
//var tableData = data;


// Get a reference to the table body
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate= d3.select("#datetime");
var inputFieldCity= d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
 //Console.log the ufo data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(ufoReport) {
    console.log(data);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(ufoReport) {
    console.log(data);
    var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(ufoReport) {
    console.log(data);
    var row= tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key,value]) {
        console.log(key, value);
        var columns = tbody.append("td");
        columns.text(value);
    });
});

//FormStuff
var button =d3.select("#filter-btn");

button.on("click", function() {
    
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("tr>span").text(inputValue);
});





