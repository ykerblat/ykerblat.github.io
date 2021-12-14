/* global d3 */

// set the dimensions and margins of the graph
const margin = {top: 100, right: 100, bottom: 100, left: 350},
    width = 1200 - margin.left - margin.right,
    height = 850 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Parse the Data
d3.csv("data/round3.csv").then( function(data) {


data.sort(function(a, b) {
  return b.verifgoogle - a.verifgoogle;
});

  // Add X axis
  const x = d3.scaleLinear()
    .domain([600, 2000])
    .range([ 0, width]);
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .style("font-size", 12)
    .style("font-weight", "bold")
    .style("fill", "#372100")


  // Y axis
  const y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.shortname; }))
    .padding(2)
  svg.append("g")
    .call(d3.axisLeft(y))
    .selectAll("text")
      // .attr("transform", "translate(-10,10)")
    // .style("text-anchor", "end")
    .style("font-size", 12)
    .style("font-weight", "bold")
    .style("fill", "#1b1000")


  // Lines
  svg.selectAll("myline")
    .data(data)
    .join("line")
      .attr("y1", function(d) { return y(d.shortname); })
      .attr("y2", function(d) { return y(d.shortname); })
      .attr("x1", function(d) { return 0; })
      .attr("x2", function(d) { return 0 })
        .transition()
        .duration(1000)
        .delay((d, i) => 100 + 150 * i)
        .attr("x1", (d) => x(d.datestart))
        .attr("x2", (d) => x(d.dateend))
      .attr("stroke", "black")
      .attr("stroke-width", "3px" )
      .attr("stroke-width", "1px")


   // create a tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px");

 
  var mouseover = function(event, d) {
    console.log('asdfasdf', event, d)
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 1)
    tooltip
        .html(d.inventorname + " in " + d.datestart + ": " + d.contexteast)
         .style("left", (event.pageX) + "px")
         .style("top", (event.pageY - 28) + "px");
  }
  var mousemove = function(d) {
    tooltip
        .html(d.inventorname + " in " + d.datestart + ": " + d.contexteast)
  }
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  };
  
    var mouseover2 = function(event, d) {
    console.log('text', event, d)
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 1)
    tooltip
        .html("In " + d.dateend + ": " + d.contextwest)
         .style("left", (event.pageX) + "px")
         .style("top", (event.pageY - 28) + "px");
  }
  var mousemove2 = function(d) {
    tooltip
        .html("In " + d.dateend + ": " + d.contextwest)
  }
  var mouseleave2 = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  };

  // Circles of variable 1
  const circs1 = svg.selectAll("mycircle")
    .data(data)
    .join("circle")
      .attr("cy", function(d) { return y(d.shortname); })
      .attr("cx", function(d) { return 0 })
      .attr("r", "6")
      .style("fill", "rgb(228, 26, 28)")
      .on("mouseover", (event, d) => mouseover(event, d))
      .on("mouseleave", (event, d) => mouseleave(event, d))

  circs1
    .transition()
    .duration(300)
    .delay((d, i) => 100 + 150 * i)
    .attr("cx", (d) => x(d.datestart))


  // Circles of variable 2
  const circs2 = svg.selectAll("mycircle")
    .data(data)
    .join("circle")
      .attr("cy", function(d) { return y(d.shortname); })
      .attr("cx", function(d) { return 0})
      .attr("r", "6")
      .style("fill", "rgb(55, 126, 184)")
      .on("mouseover", (event, d) => mouseover2(event, d))
      .on("mouseleave", (event, d) => mouseleave2(event, d))

  circs2
    .transition()
    .duration(300)
    .delay((d, i) => 100 + 150 * i)
    .attr("cx", (d) => x(d.dateend))
    
});

// Add title to graph
svg.append("text")
        .attr("x", -10)
        .attr("y", -50)
        .attr("text-anchor", "left")
        .style("font-size", "20px")
        .style("font-family", "courier")
        .style("font-weight", "bold")
        .text("What Islamic Golden Age Thinkers Discovered Long before the West");

var keys = ["East", "West"]

var color = d3.scaleOrdinal()
  .domain(keys)
  .range(d3.schemeSet1);
   
svg.selectAll("mydots")
  .data(keys)
  .enter()
  .append("circle")
    .attr("cx", 100)
    .attr("cy", function(d,i){ return 550 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", function(d){ return color(d)})

// Add one dot in the legend for each name.
svg.selectAll("mylabels")
  .data(keys)
  .enter()
  .append("text")
    .attr("x", 120)
    .attr("y", function(d,i){ return 550 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return color(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
