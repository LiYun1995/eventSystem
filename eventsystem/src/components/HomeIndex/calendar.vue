<template>
    <div class="calender_container">
        <div class="calendar_select_date">
            <span>
                <img src="../../../source/图标素材/值班管理/值班管理-排班left-icon.png" alt="">
                <font>{{mainDate}}</font>
                <img src="../../../source/图标素材/值班管理/值班管理-排班right-icon.png" alt="">
            </span>
        </div>
        <div class="calender_week">
            <ul>
                <li v-for="item in weekList">
                    <font>{{item}}</font>
                </li>
            </ul>
        </div>
        <div class="calender_date"></div>
    </div>
</template>

<script>
export default {
    name:'calender',
    data(){
        return {
            mainDate:'2019年3月',
            weekList:['日','一','二','三','四','五','六']
        }
    },
    methods:{
        isLeap:function(d){
            if(d%400===0 || (d%4===0&&d%100 !==0)){
                return true;
            }
            return false;
        },
        getFirstDate:function(){

        }
    }
}
</script>

<style>
    .calendar_container{
        width: 1000px;
        height: 500px;
        border-radius: 10px;
    }
    .calendar_select_date{
        width: 100%;
        height: 47px;
        background: #E9ECF0;
        text-align: center;
    }
    .calendar_select_date span{
        display: inline-block;
        width: 300px;
        height: 100%;
        font-size: 22px;
        color: #666666; 
    }
    .calendar_select_date span img{
        width: 20px;
        height: 19px;
        margin-top: 10px;
    }
    .calendar_select_date span font{
        margin:20px 30px;
    }
    .calender_week{
        width: 100%;
        height: 47px;
        background: #E9ECF0;
    }
    .calender_week ul{
        list-style: none;
        width: 100%;
        height: 100%;
    }
    .calender_week ul li{
        float: left;
        display: inline-block;
        width: 138px;
        height: 100%;
        text-align: center;
        padding: 10px;
    }
    .calender_date{
        width: 100%;
        height: 406px;
        background: red;
    }
</style>
