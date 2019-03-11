<template>
  <el-table :data="list">
    <el-table-column prop="date" label="日期"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="place" label="地址"/>
  </el-table>
</template>

<script>
import { tableList } from '@/api/fetchData'
export default {
  name: 'ExcelTest',
  data() {
    return {
      list: [],
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      tableList().then(response => {
        this.list = response.data.lists
        this.listLoading = false
      })
    }
  }
}
</script>
