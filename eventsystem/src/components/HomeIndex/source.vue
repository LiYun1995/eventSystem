<template>
    <div>
        <div class="commonContainer" style="height:450px;float:right">
            <div class="card-container-top">
            <h1 style="float:left">| 资源统计</h1>
            <img src="../../../source/img/index/右侧/index-count.png" alt="">
            <Button size="small" style="float:right;margin:8px 20px" ghost>资源详情</Button>
            </div>
            <div class="card-container">
                <div id="chartmain" style="width:100%;height:300px"></div>
                <div class="sourceList" style="width:100%;height:100px">
                    <ul class="sourceUl">
                        <li v-for="item in sourceListItem">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Source',
    data(){
        return {
            sourceListItem:['队伍','物资','车辆','场所']
        }
    },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('chartmain'))
        // 绘制图表
        myChart.setOption({
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        show:false
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['20%', '30%'],
            avoidLabelOverlap: false,
            data:[
                {value:48, name:'消防队'},
                {value:48, name:'医疗队'},
                {value:30, name:'消防大队'},
                {value:48, name:'医疗队'}
            ],
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255,1)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },

        }
    ]
});

    }
  }
   
}
</script>

<style>
    .sourceUl{
        width: 100%;
        height: 66px;
        margin-top: 25px;
    }
    .sourceUl li{
        font-family: 'MicrosoftYaHei';
        float: left;
        display: inline-block;
        width: 65px;
        height: 65px;
        margin: 0px 5px;
        background: url('../../../source/img/index/底部/index-alonebj.png');
        font-size: 18px;
        color: #FFFFFF;
        padding: 20px 10px;
        border-radius: 2px;
    }
    .sourceUl li:hover{
        cursor: pointer;
        background: url('../../../source/img/index/底部/index-alonebjhover.png');
    }
</style>
