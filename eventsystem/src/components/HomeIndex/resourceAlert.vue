<template>
  <div>
    <div class="commonContainer" style="height:218px;float:right">
      <div class="card-container-top">
        <slot name="top-slot"></slot>
      </div>
      <div class="card-container">
        <slot name="container-slot"></slot>
      </div>
    </div>
    <Modal
      v-model="modleSys"
      width="472"
      :closable="false"
      :footer-hide="true"
      class-name="vertical-center-modal"
    >
      <p slot="header" style="color:#FEFEFE;text-align:left;font-size:22px">
        <span>系统查看</span>
        <span slot="close" style="float:right;cursor:pointer" @click="modleSys = false">×</span>
      </p>
      <div>
          <ul>
              <li v-for="item in message">{{item.name}}</li>
          </ul>
          <Button style="color:#999999">忽略提醒</Button>
          <Button type="primary">立即处理</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modleSys: false,
      switchValue: true
    };
  },
  props:['message'],
  methods:{
      modleControl:function(){
          this.modleSys = true;
      }
  }
};
</script>

