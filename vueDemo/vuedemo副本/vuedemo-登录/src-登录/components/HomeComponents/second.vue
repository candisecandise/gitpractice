<template>
  <div>
    <FirstPart></FirstPart>
  </div>
</template>

<script>
import FirstPart from "./FirstPart.vue";
export default {
  //2.然后,在components中写入子组件
  components: { FirstPart },
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
  mounted() {
    this.$nextTick(function() {
      var _self = this;
      $.ajax({
        type: "POST",
        url: "/api/data",
        dataType: "json",
        success: function(res) {
          _self.tableData = res.newdata;
          console.log("22" + res.newdata);
        }
      });
    });
  }
};
</script>

