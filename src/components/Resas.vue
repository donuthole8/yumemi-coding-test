
<template>
  <div class="main">
    <!-- 都道府県一覧 -->
    <div class="prefectures-wrapper">
      <ul class="prefectures">
        <li v-for="pref in prefectures" :key="pref.prefCode">
          <input type="checkbox" :value="pref.prefCode" v-model="checkedPref">
          <label for="pref.prefCode">{{ pref.prefName }}</label>
        </li>
      </ul>
    </div>

    <!-- グラフ -->
    <div class="chart">
      <Chart class="chart"></Chart>
    </div>
  </div>
</template>

<script>
import { baseUrl, apiKey } from '@/assets/config.js'
import Chart from './Chart'
import axios from 'axios'

export default {
  name: 'Resas',
  components: {
    Chart
  },
  data () {
    return {
      prefectures: null,
      checkedPref: []
    }
  },
  mounted () {
    axios.get(baseUrl + `api/v1/prefectures`, {
      headers: { 'X-API-KEY': apiKey }
    }).then(response => {
      this.prefectures = {
        response
      }
      this.prefectures = response.data.result
    }
    )
  }
}
</script>

<style scoped>
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

.chart {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
