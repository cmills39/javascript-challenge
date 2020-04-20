// from data.js
var tableData = data;


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
  console.log(tableData);

  var filteredTime = tableData.filter(time => time.datetime === inputValue);
  var filteredCity = tableData.filter(city => city.city === inputValue);
  var filteredState = tableData.filter(state => state.state === inputValue);
  var filteredCountry = tableData.filter(country => country.country === inputValue);
  var filteredShape = tableData.filter(shape => shape.shape === inputValue);

  console.log(filteredTime);
  console.log(filteredCity);
  console.log(filteredState);
  console.log(filteredCountry);
  console.log(filteredShape);
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var time = filteredTime.map(time => time.datetime);
  var city = filteredCity.map(city => city.city);
  var state = filteredState.map(state => state.state);
  var country = filteredCountry.map(country => country.country);
  var shape = filteredShape.map(shape => shape.shape);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
 // var mean = math.mean(ages);
 // var median = math.median(ages);
 // var mode = math.mode(ages);
 // var variance = math.var(ages);
 // var standardDeviation = math.std(ages);

  // Then, select the unordered list element by class name
 // var list = d3.select(".summary");

  // remove any children from the list to
  //list.html("");

  // append stats to the list
  //list.append("li").text(`Mean: ${mean}`);
  //list.append("li").text(`Median: ${median}`);
  //list.append("li").text(`Mode: ${mode}`);
  //list.append("li").text(`Variance: ${variance}`);
  //list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});





