// 基于准备好的dom，初始化echarts图表
    var myChart01 = echarts.init(document.getElementById('chart01'));
    var option = {
   title: {
       text: "身高历史测量值",
       x: "center",
       y: "top"
   },
   tooltip: {
       trigger: "axis"
   },
   toolbox: {
       show: false,
       feature: {
           mark: {
               show: true
           },
           dataView: {
               show: true,
               readOnly: true
           },
           magicType: {
               show: false,
               type: ["line", "bar"]
           },
           restore: {
               show: true
           },
           saveAsImage: {
               show: true
           }
       }
   },
   calculable: true,
   xAxis: [
       {
           type: "category",
           boundaryGap: false,
           data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"]
       }
   ],
   yAxis: [
       {
           type: "value",
           name: "cm"
       }
   ],
   series: [
       {
           name: "身高",
           type: "line",
           data: [113, 115, 125, 132, 122, 131, 135]
       }
   ]
}
    // 为echarts对象加载数据
myChart01.setOption(option);




