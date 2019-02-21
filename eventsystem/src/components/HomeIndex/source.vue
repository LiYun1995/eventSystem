<template>
    <div>
        <Card>
            <h1 style="float:left">资源统计</h1>
            <Button style="float:right">资源详情</Button>
            <Divider />
            <div id="myChart" :style="{width: '500px',height:'300px'}"></div>
        </Card>
    </div>
</template>

<script>
export default {
    name:'Source',
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '资源统计' },
            tooltip: {},
            xAxis: {
                type:'value'
                
            },
            yAxis: {type:'category',
            data: ["车辆","消防","应急","设备","物资","医疗"]
            },
            series: [{
                name: '数量',
                type: 'bar',
                itemStyle : {  
                                normal : {  
                                    color:'#2db7f5',  //圈圈的颜色
                                    lineStyle:{  
                                        color:'#2db7f5'  //线的颜色
                                    }  
                                }  
                            },  
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
</script>
