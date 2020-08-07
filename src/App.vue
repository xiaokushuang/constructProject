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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#fff;
  background: #111933;
}
.l{
  float:left;
}
.r{
  float:right;
}
.clear:after {
  display: block;
  content: "";
  clear: both;
}
body {
  /*height: 100%;*/
  padding: 0;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

label {
  font-weight: 700;
}

html {
  /*height: 100%;*/
  box-sizing: border-box;
}

#app{
  /*height: 100%;*/
    width: 1920px;
  height: 1080px;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>
