<template>
  <!-- <div>
    <FirstPart :tableData="tableData"></FirstPart>
  </div>-->
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="address" label="地址"/>
  </el-table>
</template>

<script>
// import FirstPart from "./FirstPart.vue";
import $ from 'jquery'
export default {
  // 2.然后,在components中写入子组件
  // components: { FirstPart },
  data() {
    return {
      tableData: []
    }
  },
  // mounted() {
  //   this.$nextTick(function() {
  //     var _self = this
  //     $.ajax({
  //       type: 'POST',
  //       url: '/api/data',
  //       dataType: 'json',
  //       success: function(res) {
  //         _self.datas = res.newdata
  //       }
  //     })
  //   })
  // }
  mounted() {
    this.$nextTick(function() {
      // this.$axios.get('/api/data').then(res => {
      this.$axios.get('/a/test/list').then(res => {
        this.tableData = res.data.lists
      })
    })
  }
}
</script>

