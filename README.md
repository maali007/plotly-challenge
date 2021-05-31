<h3>Belly Button Biodiversity Dashboard</h3>
<p>This dashboard does the following:</p>
<ul>
  <li>Reads samples.json file using d3</li>
  <li>Allows user to select a test subject via a dropdown menu.</li>
  <li>Draws a horizontal bar chart of the top-10 operational taxonomic units (OTU's) for the test subject.
    <ul>
      <li>Bar width is sample-value for the OTU.</li>
      <li>Hovering on a bar shows the OTU labels.</li>
    </ul>
  </li>
  <li>Draws a bubble chart of all taxonomic units (OTU's) for the test subject.
    <ul>
      <li>Bubble size corresponds to sample-value for the OTU.</li>
      <li>Each OTU has a unique color/shade.</li>
      <li>Hovering on a bubble shows the OTU labels.</li>
    </ul>
  </li>
  <li>On changing the test subject (name), the charts are updated accordingly.
</ul>
