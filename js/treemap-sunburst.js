const domTS = document.getElementById('treemap-sunburst')
const chartTS = echarts.init(domTS)

$.getJSON('/json/echarts-package-size.json', function (data) {
  const treemapOption = {
    series: [
      {
        type: 'treemap',
        id: 'echarts-package-size',
        animationDurationUpdate: 1000,
        roam: false,
        nodeClick: undefined,
        data: data.children,
        universalTransition: true,
        label: {
          show: true,
        },
        breadcrumb: {
          show: false,
        },
      },
    ],
  }
  const sunburstOption = {
    series: [
      {
        type: 'sunburst',
        id: 'echarts-package-size',
        radius: ['20%', '90%'],
        animationDurationUpdate: 1000,
        nodeClick: undefined,
        data: data.children,
        universalTransition: true,
        itemStyle: {
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,.5)',
        },
        label: {
          show: false,
        },
      },
    ],
  }
  let currentOption = treemapOption
  chartTS.setOption(currentOption)
  setInterval(function () {
    currentOption = currentOption === treemapOption ? sunburstOption : treemapOption
    chartTS.setOption(currentOption)
  }, 3000)
})
