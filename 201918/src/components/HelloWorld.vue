<template>
  <div class="hello">
 woshishei
 <div class="bb">你哈</div>
 <el-button>我是谁</el-button>
 合并新增
 6666666
 {{URL}}
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import {RECOMMEND_URL} from '../config/api';
interface Person {
name: string;
age: number;
}
let tom: Person = {
name: 'Tom',
age: 25
};
console.log(tom);
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      URL:RECOMMEND_URL
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../style/public.less';
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  color: green;
  .bb{
    color: black;
  }
}
</style>