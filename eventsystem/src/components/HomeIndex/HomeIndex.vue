<template>
    <div>
    <Row>
        <Col span="24"><HomeNav></HomeNav></Col>
    </Row>
    <Row>
        <Col span="6">col-8</Col>
        <Col span="12">col-8</Col>
        <Col span="6">col-8</Col>
    </Row>
     <Row>
        <Col span="6">col-8</Col>
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
    export default{
        name:'HomeIndex',
        components:{HomeNav}
    }
</script>

