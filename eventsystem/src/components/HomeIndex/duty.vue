<template>
    <div>
         <div class="commonContainer" style="height:260px">
            <div class="card-container-top">
                <h1>| 今日值班</h1>
                <span style="display:inline-block;width:160px;height:100%;float:left;padding:8px 2px">
                <Button style="margin:0 6px" size="small"  ghost>值班安排</Button>
                <Button size="small"  ghost>值班简报</Button>
                </span>
            </div>
            <div class="card-container">
                <ul class="dutyListUl">
                    <li v-for="item in dutyList">
                        <img :src="item.photo" alt="no photo">
                        <span class="dutyListContent">
                            <p>
                                <font size='3'>{{item.name}}</font>
                                <font>{{item.duty}}</font>
                                <font>{{item.profession}}</font>
                            </p>
                            <p>
                                <font>{{item.phone}}</font>
                            </p>
                        </span>
                    </li>
                </ul>
            </div>
         </div>
    </div>
</template>

<script>
    export default {
        name:'Duty',
        data(){
            return {
                dutyList:[
                    {
                        name:'张三',
                        profession:'消防队长',
                        phone:'1338889999',
                        duty:'早班',
                        photo:''
                    },
                     {
                        name:'李四',
                        profession:'医疗队长',
                        phone:'1338889999',
                        duty:'全班',
                        photo:''
                    }
                ]
            }
        }
    }
</script>

<style>
    .dutyListUl{
        list-style: none;
    }
    .dutyListUl li{
        display: inline-block;
        width: 100%;
        height: 66px;
        margin: 10px 0;
    }
    .dutyListContent font{
        margin: 0 6px;
    }
</style>

