<template>
    <div>
        <card style="height:450px">
            <div class="card-container-top">
            <h1>| 事件感知</h1>
            <a href="#" style="float:right">更多</a>
            </div>
            <div class="card-container">
                <div class="vidiofeel">
                    <h2 style="float:left;margin-left:10px">视频感知</h2>
                    <ul class="vidiofeelUl">
                        <li v-for="item in vidioList">
                            <span class="vidioContent">
                                <img src="../../../source/img/index/左侧/index-perceive.png" alt="">
                                <font>{{item.name}}</font>
                                <font>{{item.time}}</font>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="vidiofeel">
                    <h2 style="float:left;margin-left:10px">视频感知</h2>
                    <ul class="vidiofeelUl">
                        <li v-for="item in thingList">
                            <span class="vidioContent">
                                <img src="../../../source/img/index/左侧/index-perceive.png" alt="">
                                <font>{{item.name}}</font>
                                <font>{{item.time}}</font>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vidioList:[
                {
                    name:'广场有人携带危险品',
                    time:'2月18日 09:16:12'
                },
                {
                    name:'广场有人携带危险品',
                    time:'2月18日 09:16:12'
                },
                {
                    name:'广场有人携带危险品',
                    time:'2月18日 09:16:12'
                }
            ],
            thingList:[
                {
                    name:'竹园有人燃烧烟花',
                    time:'2月18日 09:16:12'
                },
                {
                    name:'竹园有人燃烧烟花',
                    time:'2月18日 09:16:12'
                },
                {
                    name:'竹园有人燃烧烟花',
                    time:'2月18日 09:16:12'
                }
            ]
        }
    }
}
</script>

<style>
.vidiofeel{
    width: 100%;
    height: 190px;
}
    .vidiofeelUl{
        list-style: none;
    }
    .vidiofeelUl li{
        display: inline-block;
        width: 100%;
        height: 37px;
        margin:6px 0;
        border-radius: 2px;
    }
    .vidioContent{
        display: inline-block;
        width: 95%;
        height: 100%;
        background-image: url('../../../source/img/index/左侧/index-First.png');
        padding:8px 0;
    }
     .vidioContent font{
         margin: 0 5px;
     }
</style>
