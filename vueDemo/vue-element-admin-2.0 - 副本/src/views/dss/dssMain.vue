<template>
  <div class="zf-container">
    <el-row class="panel">
      <div class="panel-header">集群监控</div>
      <div class="panel-body">
        <el-col :span="8">
          <line-chart :chart-data="lineChartData" style="height:264px"/>
        </el-col>
        <el-col :span="8">
          <div class="chart" style="height:264px"/>
        </el-col>
        <el-col :span="8">
          <div class="chart" style="height:264px"/>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import LineChart from './components/lineChart'
import { chartList } from '@/api/fetchData'
export default {
  name: 'DssMain',
  components: {
    LineChart
  },
  data() {
    return {
      // lineChartData: lineChartData
      lineChartData: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      chartList().then(response => {
        this.lineChartData = response.data.lineChartData
        console.log(this.lineChartData)
      })
    }
  }
}
</script>
