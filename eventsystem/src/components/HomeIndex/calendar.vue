<template>
  <div class="calender_container">
    <div class="calendar_select_date">
      <span>
        <img src="../../../source/图标素材/值班管理/值班管理-排班left-icon.png" @click="reduceM">
        <font>{{mainDateY}}年{{mainDateM}}月</font>
        <img src="../../../source/图标素材/值班管理/值班管理-排班right-icon.png" @click="addM">
      </span>
    </div>
    <div class="calender_week">
      <ul>
        <li v-for="item in weekList">
          <font>{{item}}</font>
        </li>
      </ul>
    </div>
    <div class="calender_date">
        <ul class="date_row">
            <li v-for="row in 6" class="date_row_li">
                <ul class="date_col">
                    <li v-for="col in 7" class="showDate">
                        {{col}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "calender",
  data() {
    return {
      mainDateY: 2019,
      mainDateM:3,
      weekList: ["日", "一", "二", "三", "四", "五", "六"]
    };
  },
  methods: {
    isLeap: function(d) {
      if (d % 400 === 0 || (d % 4 === 0 && d % 100 !== 0)) {
        return true;
      }
      return false;
    },
    getFirstDate: function(_year, _month) {
      let allDay = 0,
        y = _year - 1,
        i = 1;
      allDay =
        y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1;
      for (; i < _month; i++) {
        switch (i) {
          case 1:
            allDay += 31;
            break;
          case 2:
            if (this.isLeap(_year)) {
              allDay += 29;
            } else {
              allDay += 28;
            }
            break;
          case 3:
            allDay += 31;
            break;
          case 4:
            allDay += 30;
            break;
          case 5:
            allDay += 31;
            break;
          case 6:
            allDay += 30;
            break;
          case 7:
            allDay += 31;
            break;
          case 8:
            allDay += 31;
            break;
          case 9:
            allDay += 30;
            break;
          case 10:
            allDay += 31;
            break;
          case 11:
            allDay += 30;
            break;
          case 12:
            allDay += 31;
            break;
        }
      }
      return allDay % 7;
    },
    showCalendar:function(_year,_month){
        var i = 0,
        monthDay = 0,
        showStr = "",
        _classname = "",
        today = new Date();
        //月份的天数
    switch(_month) {
        case 1: monthDay = 31; break;
        case 2:
            if(this.isLeap(_year)) { monthDay = 29; }
            else { monthDay = 28; }
            break;
        case 3: monthDay = 31; break;
        case 4: monthDay = 30; break;
        case 5: monthDay = 31; break;
        case 6: monthDay = 30; break;
        case 7: monthDay = 31; break;
        case 8: monthDay = 31; break;
        case 9: monthDay = 30; break;
        case 10: monthDay = 31; break;
        case 11: monthDay = 30; break;
        case 12: monthDay = 31; break;
    }
   var fd = this.getFirstDate(_year,_month);
        console.log(monthDay,fd)
    },
    reduceM:function(){
        this.mainDateM -= 1;
        if(this.mainDateM<1){
            this.mainDateM = 12;
            this.mainDateY -= 1;
        }
    },
    addM:function(){
        this.mainDateM += 1;
        if(this.mainDateM>12){
            this.mainDateM = 1;
            this.mainDateY += 1
        }
    }
  },
  mounted(){
      this.showCalendar(this.mainDateY,this.mainDateM)
      var testd = document.getElementsByClassName('showDate');
      console.log(testd)
  }
 
};
</script>

<style>
.calendar_container {
  width: 1000px;
  height: 500px;
  border-radius: 10px;
}
.calendar_select_date {
  width: 100%;
  height: 47px;
  background: #e9ecf0;
  text-align: center;
}
.calendar_select_date span {
  display: inline-block;
  width: 300px;
  height: 100%;
  font-size: 22px;
  color: #666666;
}
.calendar_select_date span img {
  width: 20px;
  height: 19px;
  margin-top: 10px;
  cursor: pointer;
}
.calendar_select_date span font {
  margin: 20px 30px;
}
.calender_week {
  width: 100%;
  height: 47px;
  background: #e9ecf0;
}
.calender_week ul {
  list-style: none;
  width: 100%;
  height: 100%;
}
.calender_week ul li {
  float: left;
  display: inline-block;
  width: 138px;
  height: 100%;
  text-align: center;
  padding: 10px;
}
.calender_date {
  width: 100%;
  height: 406px;
}

.date_row{
    list-style: none;
    width: 100%;
    height: 100%;
    line-height: 0;
   border: 1px solid rgba(204,204,204,0.5)
}
.date_row_li{
    display: inline-block;
    width:100%;
    height: 67.8px;
    
}
.date_col{
    width: 100%;
    height: 100%;
    list-style: none;
    line-height: 59px;
}
.date_col li{
    float: left;
    width: 138px;
    height: 100%;
    text-align: center;
    border: 1px solid rgba(204,204,204,0.5)
}
</style>
