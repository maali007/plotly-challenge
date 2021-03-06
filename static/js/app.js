// Use the D3 library to read in samples.json.
function drawCharts(tsin) {
    d3.json("samples.json").then((data) => {
        console.log(data)


// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Filter sample values for by id of selected individual
        var individualSamples = data.samples.filter(sample => sample.id === tsin)[0];
        console.log(individualSamples);

        // Use sample_values as the values for the bar chart.
        var barvalues = individualSamples.sample_values.slice(0, 10).reverse();
        // Use otu_ids as the labels for the bar chart.
        var barlabels = individualSamples.otu_ids.map(otuid => `OTU ${otuid}`).slice(0, 10).reverse();
        // Use otu_labels as the hovertext for the chart.
        var barhover = individualSamples.otu_labels.slice(0, 10).reverse();

        // Define chart parameters.
        var traceA = {
            x: barvalues,
            y: barlabels,
            hovertext: barhover,
            type: "bar",
            orientation: "h",
        };

        var chartA = [traceA];
        var layoutA = {
            title: "Top 10 Operational Taxonomic Units",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        };
        Plotly.newPlot("bar", chartA, layoutA);

    // Create a bubble chart that displays each sample.
        // Use otu_ids for the x values.
        var bubblelabels = individualSamples.otu_ids;

        // Use sample_values for the y values.
        var bubblevalues = individualSamples.sample_values;

        // Use otu_labels for the text values.
        var bubblehover = individualSamples.otu_labels;

        // Define chart parameters and use sample_values for the marker size while using otu_ids for the marker colors.
        var traceB = {
            x: bubblelabels,
            y: bubblevalues,
            mode: "markers",
            marker: {
                size: bubblevalues,
                color: bubblelabels
            },
            text: bubblehover
        };
        var layoutB = {
            xaxis: {
                title: "Operational Taxonomic Unit ID"
            },
            height: 600,
            width: 1200
        };
        var dataB = [traceB];
        Plotly.newPlot("bubble", dataB, layoutB);
    })
};

// Display the sample metadata, i.e., an individual's demographic information.
function tsInfo(tsin) {
    d3.json("samples.json").then((data) => {
        var individualMetadata = data.metadata.filter(sample => sample.id === tsin)[0];
        console.log(individualMetadata);
        var sampleMetadata = d3.select("#sample-metadata");
        sampleMetadata.html("");
        Object.entries(individualMetadata).forEach(function ([key, value]) {
            var row = sampleMetadata.append("tbody");
            row.text(`${key}: ${value}`);
        })

    })
}

// Update all of the plots any time that a new sample is selected.
function tsChange(tsin) {
    drawCharts(tsin);
    tsInfo(parseInt(tsin));
}

// Display initial sample charts and metadata
function initialStuff() {
    var dropdown = d3.select("#selDataset");
    // Generate the sample list to populate the select options
    d3.json("samples.json").then((data) => {
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
        drawCharts(data.names[0]);
        tsInfo(parseInt(data.names[0]));
    });
}

// Initial dashboard view
initialStuff();