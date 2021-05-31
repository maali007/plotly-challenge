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
            title: "Top 10 Operational Taxonomic Units",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        };
        Plotly.newPlot("bar", data1, layout1);

    // Create a bubble chart that displays each sample.
        // Use otu_ids for the x values.
        var bubblelabels = individualSamples.otu_ids;

        // Use sample_values for the y values.
        var bubblevalues = individualSamples.sample_values;

        // Use otu_labels for the text values.
        var bubblehover = individualSamples.otu_labels;

