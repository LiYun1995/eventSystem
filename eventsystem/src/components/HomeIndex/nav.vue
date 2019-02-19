<template>
  <div>
    <Card>
      <Row>
        <Col span="8">{{ time }}</Col>
        <Col span="8">
          <h1>可视化值班系统</h1>
        </Col>
        <Col span="8">
          <p>硬盘：共3T，剩余50G</p>
          <p>温度：22摄氏度</p>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  data() {
    return {
      time: new Date().toString()
    };
  },
  created() {
    setInterval(() => {
      this.time = new Date().toString();
    }, 1000);
  },
  methods: {}
};
</script>

