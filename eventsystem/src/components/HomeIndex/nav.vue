<template>
  <div id="top-container">
      <div id="top-left">
          <span id="top-clock">
          {{myClock}}
        </span>
        <span id="top-date">
          <p>{{myDate}}</p>
          <p>{{myWeek}}</p>
        </span>   
      </div>
      <div id="top-mid">
        <img src="../../../source/img/index/头部/index-title.png" alt="" style="margin:10px 0">
      </div>
      <div id="top-right">
        <div id="top-right-container">
            <span id="machine">
          <p>硬盘：共{{capacity}}T，剩余{{Scapacity}}G</p>
        </span>
        <span id="temperature">
          <p>机箱温度:{{temperature}}°C</p>
        </span>
        </div>
        
      </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      myClock:'',
      myDate:'',
      myWeek:'',
      capacity:'3',
      Scapacity:'50',
      temperature:'22',
      weekList:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    }
  },
   created() {
    
    setInterval(() => {
      let updateClock = new Date();
      let y = updateClock.getFullYear();
      let m = updateClock.getMonth()+1;
      let d = updateClock.getDate();
      let w = updateClock.getDay();
      this.myClock = updateClock.toLocaleTimeString();
      this.myWeek = this.weekList[w];
      this.myDate = y+"年"+m+"月"+d+"日";
    }, 1000);
  }
}
</script>

<style>
  #top-container{
    width: 100%;
    height: 90px;
    background-image: url('../../../source/img/index/头部/index-top.png');
  }
  #top-left{
    width:664px;
    height: 100%;
    float: left;
  }
  #top-mid{
    width: 591px;
    height: 100%;
    float: left;
    padding: 10px auto;
    background: url('../../../source/img/index/头部/index-toplight.png');
    background-size:296px 100px;
  }
  #top-right{
    width: 646px;
    height: 100%;
    float: right;
  }
  #top-clock{
    color: #FFC934;
    font-size: 36px;
    text-align: left;
    margin: 0 30px;
    float: left;
  }
  #top-date{
    color: #FFFFFF;
    font-size:18px;
    text-align: left;
  }
  #top-right-container{
    width: 400px;
    height: 100%;
    float: right;
  }
  #machine{
    text-align: center;
    color: #FFFFFF;
    margin: 10px 0;
    float: left;
    font-size: 18px;
  }
  #temperature{
    text-align: center;
    color: #FFFFFF;
    margin: 10px 0;
    font-size: 28px;
  }
</style>
