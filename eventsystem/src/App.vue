<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  font-family: 'MicrosoftYaHei-Bold';
  font-weight: bold;
  font-size: 24px;
  color: #B5BCFF
}
.card-container-top{
  width: 100%;
  height: 40px;
  margin-top: 10px;
  text-align: center;
  background-image: url('../source/img/index/右侧/index-light.png');
  background-size: 160px 70px;
  background-position: -10px 0px ;
  background-repeat:no-repeat
}
.card-container-top h1{
  float: left;
  margin: 0 10px;
}
.card-container-top a{
  color: #FFFFFF;
  font-size: 13px;
  float: right;
  margin: 16px 26px
}
.card-container-top img{
  float: left;
  margin-top: 13px;
}
.card-container{
  width: 100%;
  color: #FFFFFF;
}
.card-container img{
  float: left;
}
</style>
