<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  // mounted() {
  //   this.$nextTick(function() {
  //     var _self = this;
  //     $.ajax({
  //       type: "POST",
  //       url: "/api/data",
  //       dataType: "json",
  //       success: function(res) {
  //         _self.tableData = res.data;
  //         console.log(_self.tableData);
  //       }
  //     });
  //   });
  // }
  mounted() {
    this.$nextTick(function() {
      this.$axios.get("/api/data").then(res => {
        this.tableData = res.data.data;
      });
    });
  }
};
</script>

<style scoped>
</style>
