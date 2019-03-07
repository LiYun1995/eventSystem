<template>
  <div>
    <div class="commonContainer" style="height:218px">
      <div class="card-container-top">
        <h1 style="float:left">| 事件报警</h1>
        <Button
          size="small"
          style="float:right;margin:8px 20px"
          ghost
          @click="modleEventEnt = true"
        >事件录入</Button>
      </div>
      <div class="card-container">
        <ul class="eventAlertUl">
          <li v-for="item in eventAlertList">
            <span :class="item.level">
              <img src="../../../source/img/index/左侧/index-alarm.png" alt>
              <font>{{item.name}}</font>
              <font>{{item.time}}</font>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <Modal
      v-model="modleEventEnt"
      width="1000"
      :closable="false"
      :footer-hide="true"
      class-name="vertical-center-modal"
    >
      <p slot="header" style="color:#FEFEFE;text-align:left;font-size:22px">
        <span>事件录入</span>
        <span slot="close" style="float:right;cursor:pointer" @click="modleEventEnt = false">×</span>
      </p>
      <div>
        <div id="EventEntMap">
          <MapView style="height:269px"></MapView>
        </div>
        <div id="EventEntContent">
          <Form :model="formItem" :label-width="100">
            <Row>
              <Col span="12">
                <FormItem label="地点：">
                  <Input v-model="formItem.site" placeholder></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="时间：">
                  <label for>{{formItem.time}}</label>
                </FormItem>
              </Col>
            </Row>
            <br>
            <Row>
              <Col span="12">
                <FormItem label="事件类型：">
                  <Select v-model="formItem.type">
                    <Option value="一般事件">一般事件</Option>
                    <Option value="突发事件">突发事件</Option>
                    <Option value="重大事件">重大事件</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="报警来源：">
                  <Select v-model="formItem.source">
                    <Option value="群众">群众</Option>
                    <Option value="机构">机构</Option>
                    <Option value="政府">政府</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <br>
            <Row>
              <Col span="12">
                <FormItem label="规模：">
                  <Select v-model="formItem.scale">
                    <Option value="一般事件">一般事件</Option>
                    <Option value="突发事件">突发事件</Option>
                    <Option value="重大事件">重大事件</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="影响范围：">
                  <Select v-model="formItem.scop">
                    <Option value="一般事件">一般事件</Option>
                    <Option value="突发事件">突发事件</Option>
                    <Option value="重大事件">重大事件</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <br>
            <Row>
              <Col span="24" style="text-align:center">
                <FormItem>
                  <Button type="primary">匹配预案</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import MapView from "@/components/Mapview";
export default {
  components: { MapView },
  data() {
    return {
      formItem: {
        site: "",
        time: "2019年2月19日",
        type: "",
        source: "",
        scale: "",
        scop: ""
      },
      modleEventEnt: false,
      eventAlertList: [
        {
          name: "东广场出现人员斗殴",
          time: "2月18日09:16:12",
          level: "level1"
        },
        {
          name: "东广场出现人员斗殴",
          time: "2月18日09:16:12",
          level: "level2"
        },
        {
          name: "东广场出现人员斗殴",
          time: "2月18日09:16:12",
          level: "level3"
        }
      ]
    };
  },
  computed: {}
};
</script>

<style>
.eventAlertUl {
  list-style: none;
}
.eventAlertUl li {
  display: inline-block;
  width: 100%;
  height: 37px;
  margin: 6px 0;
  border-radius: 2px;
}
.level1 {
  display: inline-block;
  padding: 8px 0;
  width: 95%;
  height: 100%;
  background-image: url("../../../source/img/index/左侧/index-First.png");
}
.level2 {
  display: inline-block;
  padding: 8px 0;
  width: 95%;
  height: 100%;
  background-image: url("../../../source/img/index/左侧/index-Secondary.png");
}
.level3 {
  display: inline-block;
  padding: 8px 0;
  width: 95%;
  height: 100%;
  background-image: url("../../../source/img/index/左侧/index-Third.png");
}
.eventAlertUl font {
  margin: 0 5px;
}
#EventEntContent {
  width: 939px;
  margin: 22px 0;
}
#EventEntMap {
  width: 939px;
  height: 269px;
}
</style>


