<template>
  <el-table :data="list">
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="place" label="地址"></el-table-column>
  </el-table>
</template>

 <script>
import { testList } from "@/api/article";
export default {
  name: "ExcelTest",
  data() {
    return {
      list: [],
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      testList().then(response => {
        console.log(11111);
        console.log(response.data);
        this.list = response.data.lists;

        this.listLoading = false;
      });
    }
  }
};
</script>