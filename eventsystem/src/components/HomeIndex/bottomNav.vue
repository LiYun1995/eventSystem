<template>
    <div>
        <Card style="width:100%;height:81px">
           <ul id="bottomList">
               <li @class="listFamily" v-for="item in list">

               </li>
           </ul>
        </Card>
    </div>
</template>

<script>
export default {
    name:'BottomNav',
    data(){
        return {
            list:[
                {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
            },
            {
                    bgAddress:'',
                    icoAddress:''
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
        width: 500px;
        background: red;
        height: 100%;
    }
    .listFamily{
        display: inline-block;
        width: 66px;
        height: 66px;
        
        margin: 0 5px;
    }
</style>


