<template>
    <div>
        <Row>
        <Col span="24">
            <div id="manage_top_nav">
                <h2 style="float:left">应急相应系统</h2>
                <ul class='manage_top_nav_list'>
                    <li v-for="item in navList">{{item}}</li>
                </ul>
                <div class="user">
                    <span style="display:inline-block;width:88px;height:100%;border-right:1px solid #FFFFFF"><img src="../../../source/图标素材/消息icon.png" alt=""></span>
                    <span>系统管理员<img src="../../../source/图标素材/系统管理员箭头icon.png" alt=""></span>
                </div>
            </div>
         </Col>
    </Row>
    <Row>
        <Col span="24">
            <EventManage></EventManage>
        </Col>
        
    </Row>
    </div>
</template>

<script>
import EventManage from './EventManage.vue'
export default {
    data(){
        return {
            navList:['首页','值班管理','资源管理','事件管理','预案管理','工单管理']
        }
        
    },
    components:{EventManage},
    methods:{
        
    }
}
</script>

<style>
#manage_top_nav{
    width: 100%;
    height: 90px;
    background: #016BD8;
    padding: 30px 0;
    color: #FFFFFF;
}
.manage_top_nav_list{
    list-style: none;
    width:550px;
    height: 100%;
    margin-left: 390px;
    float: left;
}
.manage_top_nav_list li{
    display: inline-block;
    float: left;
    width: 80px;
    height: 100%;
    cursor: pointer;
}
.user{
    width: 200px;
    height: 100%;
    float: right;
}
</style>
