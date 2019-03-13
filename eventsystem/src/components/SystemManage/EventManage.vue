<template>
    <div>
        <Row>
            <Col span="3">
                <div class="left_nav">
                    <ul class="left_nav_list">
                        <li v-for="item in eventMList">
                            <img :src="item.iconAdress" alt="">
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col span="21"></Col>
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
            eventMList:[
                {
                    iconAdress:EvtMan,
                    name:'事件管理'
                },
                {
                    iconAdress:EvtDo,
                    name:'事件处置'
                },
                {
                    iconAdress:EvtGro,
                    name:'讨论组'
                },
                {
                    iconAdress:EvtYy,
                    name:'语音'
                }
                ]
        }
    }
}
</script>
