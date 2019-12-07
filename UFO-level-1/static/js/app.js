// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


// // ufoSightings values (datetime, city, state, country, shape, durationMinutes, comments)
tableData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo sighting object
    var cell = row.append("td");
    cell.text(value);
   });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

     // clear list
     tbody.html("");

     //loop filtered data
     filteredData.forEach(function(sightings) {
      console.log(sightings);
      var row = tbody.append("tr");
      Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);
   //     // Append a cell to the row for each value
   //     // in the ufo sighting object
        var cell = row.append("td");
        cell.text(value);
      });


    console.log(filteredData);
    });
  });
