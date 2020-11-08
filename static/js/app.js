// function buildPlot() {
//     d3.json('../samples.json').then(function(data) {
//         console.log(data)

//         var sampleValues = Object.value(data.sample)
//         var otuIds = data.samples.otu_ids;
//         var otuLables = data.samples.otu_lables;
        
//         var trace1 = {
//             type: 'bar',
//             x: sampleValues,
//             y: otuIds,
//         };

//         var plotData = [trace1];

//         Plotly.newPlot('bar', plotData);

//     })
// }

// d3.selectAll('selDataset').on('change', optionChanged);

// function optionChanged() {

//     console.log('this worked')
//     var dropDown = d3.selectAll(this)
//     dataSet = dropDown.property('value')

//     var x = [];
//     var y = [];

//     if (dataSet == 'dataset1') {
//         x = []
//         y = []
//     }

//     if (dataSet == 'dataset2') {
//         x = []
//         y = []
//     }
// }

// buildPlot()


var sampleValues = Object.values(data.names)