<template>
  <div class="main">
    <!-- 都道府県一覧 -->
    <div class="prefectures-wrapper">
      <ul class="prefectures">
        <li v-for="pref in prefectures" :key="pref.prefCode">
          <input
            type="checkbox"
            :value="pref.prefCode"
            v-model="checkedPrefs"
            @click="drawChart(pref.prefCode, pref.prefName)"
          />
          <label>{{ pref.prefName }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { baseUrl, apiKey } from '@/assets/config.js'
import axios from 'axios'

export default {
  name: 'Resas',
  data () {
    return {
      prefectures: null,
      checkedPrefs: [],
      people: []
    }
  },
  mounted () {
    // APIにて都道府県一覧取得
    axios.get(baseUrl + `api/v1/prefectures`, {
      headers: { 'X-API-KEY': apiKey }
    }).then(response => {
      this.prefectures = {
        response
      }
      this.prefectures = response.data.result
    }
    )
  },
  methods: {
    async drawChart (prefCode, prefName) {
      // 人口の初期化
      this.people = []
      // APIにて人口構成取得
      await axios.get(baseUrl + `api/v1/population/composition/perYear?prefCode=` + prefCode + `&cityCode=-`, {
        headers: { 'X-API-KEY': apiKey }
      }).then(response => {
        for (let i = 0; i < response.data.result.data[0].data.length; i++) {
          this.people.push(response.data.result.data[0].data[i].value)
        }
      }
      )

      // グラフの描画
      this.$emit('drawChart', prefCode, prefName, this.people)
    }
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
