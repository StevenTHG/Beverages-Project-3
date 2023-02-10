let albanyYear = [2013,2014,2015,2016,2017,
                  2018,2019,2020,2021,2022];
let albanyDailyAvgTemp = [
  53.4346405229,
  48.3753424658,
  49.9671232877,
  51.3852459016,
  50.5232876712,
  50.5287671233,
  49.8767123288,
  50.8961748634,
  49.2904109589,
  50.9479452055
];
let albanyDailyMaxTemp = [
  53.4346405229,
  48.3753424658,
  49.9671232877,
  51.3852459016,
  50.5232876712,
  50.5287671233,
  49.8767123288,
  50.8961748634,
  49.2904109589,
  50.9479452055
];
let albanyDailyMinTemp = [
  53.4346405229,
  48.3753424658,
  49.9671232877,
  51.3852459016,
  50.5232876712,
  50.5287671233,
  49.8767123288,
  50.8961748634,
  49.2904109589,
  50.9479452055
];

// Display the default plot
function init() {
  let trace1 = {
    x: albanyYear,
    y: albanyDailyAvgTemp,
    type: "scatter"
  };
  
  let layout = {
    title: 'Albany, New York Average Yearly Temperature'
  };
  
  let data = [trace1];
  
  Plotly.newPlot("line", data, layout);
}

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a letiable
//   let dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   let data = [];

//   if (dataset == 'australia') {
//       data = australia;
//   }
//   else if (dataset == 'brazil') {
//       data = brazil;
//   }
//   else if (dataset == 'uk') {
//       data = uk;
//   }
//   else if (dataset == 'mexico') {
//     data = mexico;
//   }
//   else if (dataset == 'singapore') {
//       data = singapore;
//   }
//   else if (dataset == 'southAfrica') {
//     data = southAfrica;
//   }
// // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

init();
