<template>
    <div>
        <Card style="height:218px">
            <div class="card-container-top">
                <slot></slot>
            </div>
            <div class="card-container">
                <ul class="eventAlertUl">
                    <li v-for="item in eventAlertList">
                        <span :class="item.level">
                            <img src="../../../source/img/index/左侧/index-alarm.png" alt="">
                            <font>{{item.name}}</font>
                            <font>{{item.time}}</font>
                        </span>
                    </li>
                </ul>
            </div>
             
        </Card>
       
    </div>
</template>

<script>
export default {
   data(){
       return {
           eventAlertList:[
               {
                   name:'东广场出现人员斗殴',
                   time:'2月18日09:16:12',
                   level:'level1'
               },
                {
                   name:'东广场出现人员斗殴',
                   time:'2月18日09:16:12',
                   level:'level2'
               },
                {
                   name:'东广场出现人员斗殴',
                   time:'2月18日09:16:12',
                   level:'level3'
               }
           ]
       }
   },
   computed:{
      
   }
}
</script>

<style>
    .eventAlertUl{
        list-style: none;
    }
    .eventAlertUl li{
        display: inline-block;
        width: 100%;
        height: 37px;
        margin: 6px 0;
        border-radius: 2px;
    }
    .level1{
        display: inline-block;
        padding: 8px 0;
        width: 95%;
        height: 100%;
        background-image: url('../../../source/img/index/左侧/index-First.png')
    }
    .level2{
        display: inline-block;
        padding: 8px 0;
        width: 95%;
        height: 100%;
        background-image: url('../../../source/img/index/左侧/index-Secondary.png')
    }
    .level3{
        display: inline-block;
        padding: 8px 0;
        width: 95%;
        height: 100%;
        background-image: url('../../../source/img/index/左侧/index-Third.png')
    }
    .eventAlertUl font{
        margin: 0 5px;
    }
</style>


