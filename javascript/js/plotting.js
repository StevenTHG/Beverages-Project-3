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
  63.0424836601,
  57.6602739726,
  59.9369863014,
  61.1666666667,
  59.6356164384,
  59.0931506849,
  59.0630136986,
  60.3360655738,
  58.1643835616,
  60.9150684932
];
let albanyDailyMinTemp = [
  43.2647058824,
  38.5863013699,
  39.5205479452,
  41.0928961749,
  40.8876712329,
  41.4575342466,
  40.2054794521,
  40.9726775956,
  39.904109589,
  40.4904109589
];

// Display the default plot
function init() {
  let trace1 = {
    x: albanyYear,
    y: albanyDailyAvgTemp,
    type: "line",
  };
  
  let layout = {
    title: 'Albany, New York Average Yearly Temperature (\u00B0F)',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Temperature'
    }
  };
  
  let data = [trace1];
  
  Plotly.newPlot("albanyLine", data, layout);
};

let trace1 = {
  x: albanyYear,
  y: albanyDailyAvgTemp,
  type: "line",
  name: 'Average Daily Average Temp'
};
let trace2 = {
  x: albanyYear,
  y: albanyDailyMaxTemp,
  type: "line",
  name: 'Average Daily Max Temp'
};
let trace3 = {
  x: albanyYear,
  y: albanyDailyMinTemp,
  type: "line",
  name: 'Average Daily Min Temp'
};


// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  let layout = {
    title: 'Albany, New York Average Yearly Temperature (\u00B0F)',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Temperature'
    }
  };
  if (dataset == 'avgDailyMaxTemp') {
      data = [trace2];
  }
  else if (dataset == 'avgDailyMinTemp') {
      data = [trace3];
  }
  else if (dataset == 'avgDailyAvgTemp') {
    data = [trace1];
  }
  else if (dataset == 'allAvg') {
    data = [trace1,trace2,trace3];
  }
// Call function to update the chart
  Plotly.newPlot("albanyLine", data, layout);
}

init();
