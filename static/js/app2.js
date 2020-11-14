let data;

d3.json('../samples.json').then(function(json) {
    // console.log('loading');
    // load your data
    // console.log(json);
    data = json; 
    // populate dropdown
    var testids = d3.select('#selDataset');

    data.names.forEach(row => {
        testids
            .append('option')
            .text(row);
    });

    // get the selected dropdown item
    optionChanged(d3.select('select').property("value"));
});

function drawchart(sample) {
    // console.log(sample);
    var trace1 = {
        x: sample.sample_values.slice(0,9).reverse(),
        y: sample.otu_ids.map(id => `OTU ${id}`).slice(0,9).reverse(),
        hovertext: sample.otu_labels.slice(0,9).reverse(),
        type: 'bar',
        orientation: 'h'
    };

    var barData = [trace1];

    Plotly.newPlot('bar', barData);
}

function drawBubble(sample) {
    var trace2 = {
        x: sample.otu_ids,
        y: sample.sample_values,
        text: sample.otu_labels,
        mode: 'markers',
        marker: {
            size: sample.sample_values,
            color: sample.otu_ids
        }
    };

    var bubbleData = [trace2]

    Plotly.newPlot('bubble',bubbleData)
}

function demoTable(metadata) {

    var demoInfo = d3.select('#sample-metadata')


        demoInfo
            .text(`Id: ${metadata.id}`)
            .append('div')

            .text(`ethnicity: ${metadata.ethnicity}`)
            .append('div')

            .text(`gender: ${metadata.gender}`)
            .append('div')

            .text(`age: ${metadata.age}`)
            .append('div')

            .text(`location: ${metadata.location}`)
            .append('div')

            .text(`bbtype: ${metadata.bbtype}`)
            .append('div')

            .text(`wfreq: ${metadata.wfreq}`)     
}

function optionChanged(testid) {
    console.log(testid)

    var sample = data.samples.filter(thingy => thingy.id == testid)[0];
    var metadata = data.metadata.filter(thingy => thingy.id == testid)[0];

    console.log(sample)
    console.log(metadata)

    drawchart(sample);
    demoTable(metadata);
    drawBubble(sample);
}