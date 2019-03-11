<template>
    <div>
        <Row>
        <Col span="24">
         <Menu mode="horizontal" theme="primary" active-name="1">
        <MenuItem name="1">
           首页
        </MenuItem>
        <MenuItem name="2">
            值班管理
        </MenuItem>
           <MenuItem name="3">
            资源管理
        </MenuItem>
        <MenuItem name="4">
            事件管理
        </MenuItem>
        <MenuItem name="5">
            预案管理
        </MenuItem>
        <MenuItem name="6">

            工单管理
        </MenuItem>
    </Menu></Col>
    </Row>
    <Row>
        <Col span="3">
            <div id="man_left_nav">
                <ul class="man_left_ul">
                    <li v-for="(item,index) in left_nav_list" :class="{man_left_li_act:item.isActive}" @click="liSelectEvent(index)">
                        <img :src="item.icon" alt="">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </Col>
        <Col span="21">col-8</Col>
    </Row>
    </div>
</template>

<script>
import EvtMan from '../../../source/图标素材/导航/事件管理icon.png'
import EvtDo from '../../../source/图标素材/事件管理/事件处置icon.png'
import EvtGro from '../../../source/图标素材/事件管理/讨论组icon.png'
import EvtYy from '../../../source/图标素材/事件管理/语音icon.png'
export default {
    data(){
        return {
            
            left_nav_list:[
            {
                name:'事件管理',
                icon:EvtMan,
                isActive:false
            },
            {
                name:'事件处置',
                icon:EvtDo,
                isActive:false
            },
             {
                name:'讨论组',
                icon:EvtGro,
                isActive:false
            },
            {
                name:'语音',
                icon:EvtYy,
                isActive:false
            }
            
            ]
        }
        
    },
    methods:{
        liSelectEvent:function(ind){
           for(let i=0;i<this.left_nav_list.length;i++){
               if(ind===i){
                   this.left_nav_list[i].isActive = true
               }else{
                   this.left_nav_list[i].isActive = false
               }
           }
        }
    }
}
</script>

<style>
    #man_left_nav{
        width: 100%;
        height: 900px;
        background: #19394C;
        font-size: 20px;
        color: #FFFFFF;
    }
   
    .man_left_ul li{
        display: inline-block;
        width: 100%;
        height: 76px;
        padding: 20px 0;
        cursor: pointer;
    }
    .man_left_ul li:hover{
        background: #131E25;
        border-left: 2px solid #FFFFFF;
    }
    .man_left_ul img{
        float: left;
        margin-left: 40px;
    }
    .man_left_ul span{
        float: left;
        margin-left: 50px;
    }
    .man_left_li_act{
         background: #131E25;
        border-left: 2px solid #FFFFFF;
    }
</style>
