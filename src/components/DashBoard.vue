<template>
    <div>
        <ul>
          <li><router-link to="/" exact> Home </router-link></li>
          <li><router-link to="/orders" exact> Orders </router-link></li>
          <li><router-link to="/dashboard" exact> Dashboard </router-link></li>
        </ul>
        <BarChart></BarChart>
        <LineChart></LineChart>
    </div>
</template>

<script>
import BarChart from './Charts/BarChart.vue'
import LineChart from './Charts/LineChart.vue'
export default {
    components : {
        BarChart , 
        LineChart
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
