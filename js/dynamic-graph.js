const domDGP = document.getElementById('dynamic-graph')
const chartDGP = echarts.init(domDGP)
let inserting = true
const dataDGP = [
  {
    fixed: true,
    x: chartDGP.getWidth() / 2,
    y: chartDGP.getHeight() / 2,
    symbolSize: 20,
    id: '-1',
  },
]
const edgesDGP = []
const optionDGP = {
  series: [
    {
      type: 'graph',
      layout: 'force',
      animation: false,
      data: dataDGP,
      force: {
        repulsion: 100,
        edgeLength: 5,
      },
      edges: edgesDGP,
    },
  ],
}
setInterval(() => {
  if (dataDGP.length < 10) {
    inserting = true
  }
  if (dataDGP.length > 50) {
    inserting = false
  }
  if (inserting) {
    dataDGP.push({
      id: dataDGP.length + '',
    })
  }
  var sourceDGP = Math.round((dataDGP.length - 1) * Math.random())
  var targetDGP = Math.round((dataDGP.length - 1) * Math.random())
  if (sourceDGP !== targetDGP) {
    edgesDGP.push({
      source: sourceDGP,
      target: targetDGP,
    })
  }
  chartDGP.setOption({
    series: [
      {
        roam: true,
        data: dataDGP,
        edges: edgesDGP,
      },
    ],
  })
}, 1000)

chartDGP.setOption(optionDGP)
