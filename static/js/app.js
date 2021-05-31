// Use the D3 library to read in samples.json.
function createChart(tsin) {
    d3.json("samples.json").then((data) => {
        console.log(data)


// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Filter sample values for by id of selected individual
        var filteredSample = data.samples.filter(sample => sample.id === tsin)[0];
        console.log(filteredSample);

        // Use sample_values as the values for the bar chart.
        var barvalues = individualSamples.sample_values.slice(0, 10).reverse();
        // Use otu_ids as the labels for the bar chart.
        var barlabels = individualSamples.otu_ids.map(otuid => `OTU ${otuid}`).slice(0, 10).reverse();
        // Use otu_labels as the hovertext for the chart.
        var barhover = individualSamples.otu_labels.slice(0, 10).reverse();

        // Define chart parameters.
        var trace1 = {
            x: barvalues,
            y: barlabels,
            hovertext: barhover,
            type: "bar",
            orientation: "h",
        };

        var data1 = [trace1];
        var layout1 = {
            title: "Top 10 OTUs",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
        Plotly.newPlot("bar", data1, layout1);






    // Create a bubble chart that displays each sample.



// Use otu_ids for the x values.


// Use sample_values for the y values.


// Use sample_values for the marker size.


// Use otu_ids for the marker colors.


// Use otu_labels for the text values.

// Display the sample metadata, i.e., an individual's demographic information.


// Display each key-value pair from the metadata JSON object somewhere on the page.




// Update all of the plots any time that a new sample is selected.