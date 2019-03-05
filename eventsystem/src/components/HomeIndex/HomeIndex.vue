<template>
    
    <div>
        <MapView></MapView>
        <div style="position:absolute;top:0px;left:0px">
    <Row>
        <Col span="24"><HomeNav></HomeNav></Col>
    </Row>
    <Row>
        <Col span="6"><Duty></Duty></Col>
        <Col span="12">&nbsp</Col>
        <Col span="6">
        <ResourceAlert>
            <template v-slot:top-slot>
            <h1 style="float:left">| 资源警报</h1>
            <img src="../../../source/img/index/右侧/index-natural.png" alt="">
            <a href="#">更多</a>
            </template>
            <template v-slot:container-slot>
                <ul class="resourceUl">
                    <li v-for="item in resourceList">
                        <span class="resourceContent">
                            <font>{{item.name}}</font>
                            <font>{{item.time}}</font>
                        </span>
                    </li>
                </ul>
            </template>
        </ResourceAlert>
        </Col>
    </Row>
     <Row>
        <Col span="6"> 
        <EventAlert>
            <h1 style="float:left">| 事件报警</h1>
            <Button size="small" style="float:right;margin:8px 20px" ghost>事件录入</Button>
            </EventAlert></Col>
        <Col span="12">&nbsp</Col>
        <Col span="6">
       <ResourceAlert>
            <template v-slot:top-slot>
            <h1 style="float:left">| 系统警报</h1>
            <img src="../../../source/img/index/右侧/index-system.png" alt="">
             <Button style="float:right;margin:8px 20px" size="small"  ghost>系统详情</Button>
            </template>

             <template v-slot:container-slot>
                <ul class="resourceUl">
                    <li v-for="item in systemList">
                        <span class="resourceContent">
                            <font>{{item.name}}</font>
                            <font>{{item.time}}</font>
                        </span>
                    </li>
                </ul>
            </template>
        </ResourceAlert>
        </Col>
    </Row>
     <Row>
        <Col span="6">
            <EventFeel></EventFeel>
        </Col>
        <Col span="12">&nbsp</Col>
        <Col span="6">
            <Source></Source>
        </Col>
    </Row>
     <Row>
        <Col span="7">&nbsp</Col>
        <Col span="10" style="text-align:center" ><BottomNav></BottomNav></Col>
        <Col span="7">&nbsp</Col>
    </Row>
    </div>
    </div>
</template>


<script>
    import HomeNav from '@/components/HomeIndex/nav'
    import Duty from '@/components/HomeIndex/duty'
    import Source from '@/components/HomeIndex/source'
    import EventAlert from '@/components/HomeIndex/eventAlert'
    import ResourceAlert from '@/components/HomeIndex/resourceAlert'
    import BottomNav from '@/components/HomeIndex/bottomNav'
    import EventFeel from '@/components/HomeIndex/eventfeel'
    import MapView from '@/components/Mapview'
    export default{
        name:'HomeIndex',
        components:{HomeNav,Duty,Source,EventAlert,ResourceAlert,BottomNav,EventFeel,MapView},
        data(){
            return {
                value1:25,
                resourceList:[
                    {
                        name:'灭火器即将过保质期',
                        time:'2月18日 09:16:12'
                    },
                     {
                        name:'车辆已到保养期',
                        time:'2月18日 09:16:12'
                    }
                ],
                systemList:[
                     {
                        name:'硬盘剩余空间小于20%',
                        time:'2月18日 09:16:12'
                    },
                     {
                        name:'摄像头通信故障',
                        time:'2月18日 09:16:12'
                    }
                ]
            }
        },
        created(){
                  
        }
    }
</script>

<style>
    .resourceUl li{
        display: inline-block;
        width: 100%;
        height: 30px;
        margin-top: 10px 0;
    }
    .resourceContent :nth-child(1){
        float: left;
        margin: 0 10px;
    }
    .resourceContent :nth-child(2){
        float: right;
        margin: 0 10px;
    }
    .map{
        width: 100%;
        height: 100%;
    }
</style>


