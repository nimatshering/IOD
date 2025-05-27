// Specify the configuration items and data for the chart
const options = {
  title: {
    text: "Fake Store Categories",
  },

  xAxis: {
    data: [], // empty initially
  },
  yAxis: {},
  series: [
    {
      name: "# products',",
      type: "bar",
      data: [], // empty initially
    },
  ],
};

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    // use this JSON to find and set correct option data for the chart
    const categoryCounts = {};
    for (const product of json) {
      const category = product.category;
      if (categoryCounts[category]) {
        categoryCounts[category]++; // already exists, just add 1
      } else {
        categoryCounts[category] = 1; // first time seeing this category
      }
    }

    // Extract keys and values correctly
    const category = Object.keys(categoryCounts); // using the global Object to convert to array category names
    const products = Object.values(categoryCounts); //using the global Object to convert to array category values

    options.xAxis.data = category;
    options.series[0].data = products;
  })
  .then(() => {
    // Display the chart
    myChart.setOption(options);
  });

// Initialize the echarts instance based on the prepared div
let myChart = echarts.init(document.getElementById("main"));
