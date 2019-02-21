<template>
  <!-- <div>
    <FirstPart :tableData="tableData"></FirstPart>
  </div>-->
  <el-table :data="datas">
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
// import FirstPart from "./FirstPart.vue";
export default {
  //2.然后,在components中写入子组件
  // components: { FirstPart },
  data() {
    return {
      datas: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      var _self = this;
      $.ajax({
        type: "POST",
        url: "/api/data",
        dataType: "json",
        success: function(res) {
          _self.datas = res.newdata;
          console.log(res.newdata);
        }
      });
    });
  }
};
</script>

