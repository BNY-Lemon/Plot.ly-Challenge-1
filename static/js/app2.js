let data; //delete me later

// on load (homepage is visited)
d3.json('../samples.json').then(function(json) {
    console.log('loading');
    // load your data
    console.log(json);
    data = json; //delete me later too
    // populate dropdown
    var testids = d3.select('#selDataset');
    // the non suck way
        // var optionHTML = "";
        // for (number in data.names) {
        //     optionHTML = optionHTML + `<option>${data.names[number]}</option>`;
        // }
        // testids.html(optionHTML);
    data.names.forEach(row => {
        testids
            .append('option')
            .text(row);
    });

    // get the selected dropdown item
    optionChanged(d3.select('select').property("value"));
});

function drawchart(sample) {
    console.log(sample);
    var trace1 = {
        type: 'bar',
        x: sample.sample_values,
        y: sample.otu_ids,
    };

    var plotData = [trace1];

    Plotly.newPlot('bar', plotData);
}

function drawscatter() {
    console.log('scatter');
}

function optionChanged(testid) {
    var sample = data.samples.filter(thingy => thingy.id == testid)[0];
    drawchart(sample);
    drawscatter();
}