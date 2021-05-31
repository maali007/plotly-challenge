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
