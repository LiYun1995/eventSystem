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
          <li v-for="item in eventAlertList" @click="getEvent(item)">
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
    <Modal
      v-model="modleEveAlert"
      width="700"
      :closable="false"
      :footer-hide="true"
      class-name="vertical-center-modal"
    >
      <p slot="header" style="color:#FEFEFE;text-align:left;font-size:22px">
        <span>事件报警</span>
        <span slot="close" style="float:right;cursor:pointer" @click="modleEveAlert = false">×</span>
      </p>
      <div style="overflow:hidden">
        <div id="EventAleMap">
          <MapView style="height:228px"></MapView>
        </div>
        <div id="EventAleContent">
          <h2 style="font-size:20px;margin-bottom:20px">报警信息</h2>
          <p>{{modleEveData.name}}</p>
          <p>人数：{{modleEveData.perCou}}</p>
          <p>是否持械：{{modleEveData.hvWeap}}</p>
          <p>是否有扩张趋势：{{modleEveData.isBiger}}</p>
          <Button type="primary" style="float:left" @click="selectPlan">选择预案</Button>
          <Button type="primary" style="float:right">事件误报</Button>
        </div>
      </div>
    </Modal>
    <Modal
      v-model="modleSelectPlan"
      width="1000"
      :closable="false"
      :footer-hide="true"
      class-name="vertical-center-modal"
    >
      <p slot="header" style="color:#FEFEFE;text-align:left;font-size:22px">
        <span>选择预案</span>
        <span slot="close" style="float:right;cursor:pointer" @click="modleSelectPlan = false">×</span>
      </p>
      <div>
        <h2 style="font-size:20px;margin-bottom:20px">事件信息</h2>
        <p>{{modleEveData.name}}</p>
        <h2 style="font-size:20px;margin-bottom:20px">匹配预案</h2>
        <Table
          stripe
          :row-class-name="rowClassName"
          :columns="planTable"
          :data="this.$DataList.plan"
        ></Table>
      </div>
    </Modal>
    <Modal
      v-model="modleSelectPlanWat"
      width="1000"
      :closable="false"
      :footer-hide="true"
      class-name="vertical-center-modal"
    >
      <p slot="header" style="color:#FEFEFE;text-align:left;font-size:22px">
        <span>选择预案</span>
        <span slot="close" style="float:right;cursor:pointer" @click="modleSelectPlanWat = false">×</span>
      </p>
      <div class="tab_plan_select">
        <p>预案名称：{{planList.pl_name}}</p>
        <p>预案等级：{{planList.pl_level}}</p>
        <p>适用情景：{{planList.pl_scene}}</p>
        <p>适用范围：{{planList.pl_scale}}</p>
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
      modleEveAlert: false,
      modleSelectPlan: false,
      modleSelectPlanWat: false,
      planList: {},
      modleEveData: {},
      eventAlertList: [
        {
          name: "东广场出现人员斗殴",
          time: "2月18日09:16:12",
          level: "level1",
          perCou: 10,
          hvWeap: "是",
          isBiger: "无"
        },
        {
          name: "天府新区突发事件",
          time: "2月18日09:16:12",
          level: "level2",
          perCou: 10,
          hvWeap: "是",
          isBiger: "无"
        },
        {
          name: "华府大道出现人员斗殴",
          time: "2月18日09:16:12",
          level: "level3",
          perCou: 10,
          hvWeap: "是",
          isBiger: "无"
        }
      ],
      planTable: [
        {
          title: "序号",
          key: "pl_num",
          align: "center"
        },
        {
          title: "预案名称",
          key: "pl_name",
          align: "center"
        },
        {
          title: "响应级别",
          key: "pl_level",
          align: "center"
        },
        {
          title: "适用场景",
          key: "pl_scene",
          align: "center"
        },
        {
          title: "适用规模",
          key: "pl_scale",
          align: "center"
        },
        {
          title: "操作",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("span", {
                style: {
                  display: "inline-block",
                  width: "26px",
                  height: "26px",
                  margin: "0 20px",
                  cursor: "pointer"
                },
                class: "tab_plan_handle_wat",
                on: {
                  click: () => {
                    this.modleSelectPlanWat = true;
                    console.log(params.index);
                    this.planList = this.$DataList.plan[params.index];
                  }
                }
              }),
              h("span", {
                style: {
                  display: "inline-block",
                  width: "26px",
                  height: "26px",
                  cursor: "pointer"
                },
                class: "tab_plan_handle_sta",
                on: {
                  click: () => {
                    alert("dianle");
                  }
                }
              })
            ]);
          }
        }
      ]
    };
  },
  computed: {},
  methods: {
    getEvent: function(i) {
      this.modleEveAlert = true;
      this.modleEveData = i;
    },
    selectPlan: function() {
      this.modleSelectPlan = true;
      console.log(this.$DataList);
    },
    rowClassName(row, index) {
      if (index === 1) {
        return "tab_plan_head";
      }
      return "";
    }
  },
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
  cursor: pointer;
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
#EventAleMap {
  width: 300px;
  height: 228px;
  margin: 8px 20px;
  float: left;
}
#EventAleContent {
  width: 320px;
  height: 228px;
  float: left;
  margin: 8px 0px;
}
#EventAleContent p {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  margin: 4.5px 0px;
}
.tab_plan_head {
  background-color: #e9ecf0;
}
.tab_plan_handle_wat {
  background-image: url("../../../source/图标素材/查看icon.png");
}
.tab_plan_handle_sta {
  background-image: url("../../../source/图标素材/启动icon.png");
}
.tab_plan_select p{
  font-size:20px;
  font-family:MicrosoftYaHei;
  color:rgba(51,51,51,1);
  line-height:19px;
  margin: 20px 31px;
}
</style>


