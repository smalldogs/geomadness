import us from '../data/us.json'

const svg = d3.select("svg")
const projection = d3.geoAlbersUsa();
const path = d3.geoPath().projection(projection);

const div = d3.select("body")
	.append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);

/**
 * Draws the base map of the USA
 **/
function render(cb) {
  svg.append("path")
      .attr("class", "states")
      .datum(topojson.feature(us, us.objects.states))
      .attr("d", path)

	cb()
}

function drawCircles(locations, group, color = 'steelblue') {
	svg.selectAll("circle[data-group='" + group + "']")
      .data(locations)
      .enter().append("svg:circle")
      .attr("r", 3)
			.style("fill", color)
      .attr("cx", (d) => projection([d.longitude,d.latitude]) ? projection([d.longitude,d.latitude])[0] : 0)
      .attr("cy", (d) => projection([d.longitude,d.latitude]) ? projection([d.longitude,d.latitude])[1] : 0)
			.on("mouseover", function(d) {
	    	div.transition()
      	   .duration(100)
           .style("opacity", .9);
           div.text(d.name)
           .style("left", (d3.event.pageX) + "px")
           .style("top", (d3.event.pageY - 28) + "px");
			})
	    .on("mouseout", function(d) {
        div.transition()
           .duration(250)
           .style("opacity", 0);
	    });
}

module.exports = {
	render,
	drawCircles,
}
