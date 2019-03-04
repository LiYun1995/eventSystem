<template>
    <div>
    <Row>
        <Col span="24"><HomeNav></HomeNav></Col>
    </Row>
    <Row>
        <Col span="6"><Duty></Duty></Col>
        <Col span="12">&nbsp</Col>
        <Col span="6"> <ResourceAlert>
            <h1 style="float:left">| 资源警报</h1>
            <img src="../../../source/img/index/右侧/index-natural.png" alt="">
            <a href="#">更多</a>
        </ResourceAlert></Col>
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
            <h1 style="float:left">| 系统警报</h1>
            <img src="../../../source/img/index/右侧/index-system.png" alt="">
             <Button style="float:right;margin:8px 20px" size="small"  ghost>系统详情</Button>
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
</template>

<script>
    import HomeNav from '@/components/HomeIndex/nav'
    import Duty from '@/components/HomeIndex/duty'
    import Source from '@/components/HomeIndex/source'
    import EventAlert from '@/components/HomeIndex/eventAlert'
    import ResourceAlert from '@/components/HomeIndex/resourceAlert'
    import BottomNav from '@/components/HomeIndex/bottomNav'
    import EventFeel from '@/components/HomeIndex/eventfeel'
    export default{
        name:'HomeIndex',
        components:{HomeNav,Duty,Source,EventAlert,ResourceAlert,BottomNav,EventFeel},
        data(){
            return {
                value1:25
            }
        }
    }
</script>

