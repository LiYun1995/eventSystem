<template>
    <div>
        <div style="width:100%;height:81px;background:rgba(24,34,126,0.8);border-radius:5px;">
           <ul id="bottomList">
               <li class="listFamily" v-for="item in list">
                   <span :class="{'classA':item.isA,'classB':item.isB}" >   
                       <img :src="item.icoAddress">
                       <p>{{item.listTitle}}</p>
                   </span>
               </li>
           </ul>
        </div>
    </div>
</template>

<script>
import aimsicon from '../../../source/img/index/底部/index-aimsicon.png'
import allbj from '../../../source/img/index/底部/index-allbj.png'
import alonebj from '../../../source/img/index/底部/index-alonebj.png'
import alonebjhover from '../../../source/img/index/底部/index-alonebjhover.png'
import cameraicon from '../../../source/img/index/底部/index-cameraicon.png'
import caricon from '../../../source/img/index/底部/index-caricon.png'
import controlicon from '../../../source/img/index/底部/index-controlicon.png'
import Materialicon from '../../../source/img/index/底部/index-Materialicon.png'
import monitoricon from '../../../source/img/index/底部/index-monitoricon.png'
import naturalicon from '../../../source/img/index/底部/index-naturalicon.png'
import placeicon from '../../../source/img/index/底部/index-placeicon.png'
import plessingicon from '../../../source/img/index/底部/index-pressingicon.png'
import Teamicon from '../../../source/img/index/底部/index-Teamicon.png'
export default {
    name:'BottomNav',
    data(){
        return {
            list:[
                {
                    bgAddress:allbj,
                    icoAddress:plessingicon,
                    listTitle:'',
                    isA:true
            },
            {
                    bgAddress:'',
                    icoAddress:Teamicon,
                    listTitle:'队伍',
                    isB:true
            },
            {
                    bgAddress:'',
                    icoAddress:Materialicon,
                    listTitle:'物资',
                    isB:true
            },
            {
                    bgAddress:'',
                    icoAddress:caricon,
                    listTitle:'车辆',
                    isB:true
            },
            {
                    bgAddress:'',
                    icoAddress:placeicon,
                    listTitle:'场所',
                    isB:true
            },
            {
                    bgAddress:'',
                    icoAddress:cameraicon,
                    listTitle:'',
                     isA:true
            },
            {
                    bgAddress:'',
                    icoAddress:naturalicon,
                    listTitle:'危险隐患',
                    isB:true
            },
            {
                    bgAddress:'',
                    icoAddress:aimsicon,
                    listTitle:'重要目标',
                    isB:true
            },
            {
                    bgAddress:'',
                    icoAddress:monitoricon,
                    listTitle:'环境监测',
                    isB:true
            },
            {
                    bgAddress:'',
                    icoAddress:controlicon,
                    listTitle:'视频监控',
                    isB:true
            }
            ]
        }
    }
}
</script>

<style>
    #bottomList{
        display: inline-block;
        list-style: none;
        width: 100%;
        height: 100%;
        
    }
    .listFamily{
        display: inline-block;
        width: 66px;
        height: 66px;
        float: left;
        margin: 8px 6.5px;
    }
    .listFamily :hover{
         background-image: url('../../../source/img/index/底部/index-alonebjhover.png');
    }
    .classA{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../../../source/img/index/底部/index-allbj.png');
        cursor: pointer;
    }
    .classB{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../../../source/img/index/底部/index-alonebj.png');
        cursor: pointer;
    }

    .classA img{
       margin: 13px 10px;
    }
    .classB img{
       margin-top:10px;
    }
    .classB p{
        font-family: 'MicrosoftYaHei';
        color:#FFFFFF;
        font-size: 11px;

    }
    
</style>


