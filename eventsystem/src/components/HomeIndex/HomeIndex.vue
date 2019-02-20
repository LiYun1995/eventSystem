<template>
    <div>
    <Row>
        <Col span="24"><HomeNav></HomeNav></Col>
    </Row>
    <Row>
        <Col span="6"><Duty></Duty></Col>
        <Col span="12">col-8</Col>
        <Col span="6"> <Card>
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card></Col>
    </Row>
     <Row>
        <Col span="6"> <Slider v-model="value1"></Slider></Col>
        <Col span="12">col-8</Col>
        <Col span="6">col-8</Col>
    </Row>
     <Row>
        <Col span="6">col-8</Col>
        <Col span="12">col-8</Col>
        <Col span="6">col-8</Col>
    </Row>
     <Row>
        <Col span="24">col-8</Col>
    </Row>
    </div>
</template>

<script>
    import HomeNav from '@/components/HomeIndex/nav'
    import Duty from '@/components/HomeIndex/duty'
    export default{
        name:'HomeIndex',
        components:{HomeNav,Duty},
        data(){
            return {
                value1:25
            }
        }
    }
</script>

