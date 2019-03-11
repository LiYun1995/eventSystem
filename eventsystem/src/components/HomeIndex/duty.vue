<template>
  <div>
    <div class="commonContainer" style="height:260px">
      <div class="card-container-top">
        <h1>| 今日值班</h1>
        <span style="display:inline-block;width:160px;height:100%;float:left;padding:8px 2px">
          <Button style="margin:0 6px" size="small" ghost @click="dutyPlan = true">值班安排</Button>
         
          <Button size="small" ghost @click="modleBul = true">值班简报</Button>

           <Modal v-model="modleBul" width="1000" :closable="false" :footer-hide="true" class-name="vertical-center-modal">
          <p slot="header" style="color:#FEFEFE;text-align:left;font-size:22px">
            <span>值班简报【查看】</span>
            <span style="float:right;cursor:pointer" @click="modleBul = false">×</span>
          </p>
          <div class="articleContent">
            <p>简报标题：{{dutyNews.title}}</p>
            <p>简报内容：{{dutyNews.content}}</p>
            <p>报告机构：{{dutyNews.reportOrg}}</p>
            <p>报告人：{{dutyNews.reportMan}}</p>
            <p>报告日期：{{dutyNews.reportTime}}</p>
          </div>
        </Modal>
        </span>
      </div>
      <div class="card-container">
        <ul class="dutyListUl">
          <li v-for="item in dutyList">
            <img :src="item.photo" alt="no photo">
            <span class="dutyListContent">
              <p>
                <font size="3">{{item.name}}</font>
                <font>{{item.duty}}</font>
                <font>{{item.profession}}</font>
              </p>
              <p>
                <font>{{item.phone}}</font>
              </p>
            </span>
          </li>
        </ul>
        <a href="#" style="color:#FFFFFF;font-size:14px;" @click="modleList = true">查看列表</a>
        <Modal v-model="modleList" width="700" :closable="false" :footer-hide="true" class-name="vertical-center-modal">
          <p slot="header" style="color:#FEFEFE;text-align:left;font-size:22px">
            <span>值班列表</span>
            <span slot="close" style="float:right;cursor:pointer" @click="modleList = false">×</span>
          </p>
          <div>
            <ul class="dutyListUl">
              <li v-for="item in dutyList">
                <span class="dutyModListContent">
                  <img :src="item.photo" alt="no photo" style="float:left">
                  <p>
                    <font>{{item.name}}</font>
                    <font>{{item.duty}}</font>
                    <font>{{item.profession}}</font>
                    <font>{{item.phone}}</font>
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    </div>
    <Modal v-model="dutyPlan" width="1000" :closable="false" :footer-hide="true" class-name="vertical-center-modal">
          <div>
           <Calendar></Calendar>
          </div>
        </Modal>
  </div>
</template>

<script>
import Calendar from "@/components/HomeIndex/calendar"
export default {
  name: "Duty",
  components:{Calendar},
  data() {
    return {
      modleList: false,
      modlePlan:false,
      modleBul:false,
      dutyPlan:false,
      dutyList: [
        {
          name: "张三",
          profession: "消防队长",
          phone: "1338889999",
          duty: "早班",
          photo: ""
        },
        {
          name: "李四",
          profession: "医疗队长",
          phone: "1338889999",
          duty: "全班",
          photo: ""
        }
      ],
      dutyNews: {
        title: "2019年2月19日值班简报",
        content: "今日无事故",
        reportOrg: "青岛国际机场有限公司",
        reportMan: "admin",
        reportTime: "2019年2月19日"
      }
    };
  }
};
</script>

<style>
.dutyListUl {
  list-style: none;
}
.dutyListUl li {
  display: inline-block;
  width: 100%;
  height: 66px;
  margin: 10px 0;
}
.dutyListContent font {
  margin: 0 6px;
}
.dutyModListContent {
  text-align: center;
}
.dutyModListContent font {
  font-size: 18px;
  color: #000000;
  margin: 0 20px;
}
</style>

