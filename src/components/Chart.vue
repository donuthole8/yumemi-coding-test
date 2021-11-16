<template>
  <div class="main-wrapper">
    <h3>都道府県一覧</h3>
    <div>
      <Resas @drawChart="drawChart"></Resas>
    </div>

    <div>
      <HighCharts :options="chartOptions"></HighCharts>
    </div>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'
import Resas from './Resas'

export default {
  extends: Chart,
  name: 'Chart',
  components: {
    HighCharts: Chart,
    Resas: Resas
  },
  data () {
    return {
      people: [],
      chartOptions: {
        title: {
          text: '総人口推移グラフ'
        },
        subtitle: {
          text: 'Total population transition graph'
        },
        xAxis: {
          title: {
            text: '年度'
          },
          categories: ['1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040', '2045']
        },
        yAisx: {
          title: {
            text: '人口'
          }
        },
        series: [{
        }]
      }
    }
  },
  methods: {
    drawChart (prefCode, prefName, people) {
      // 人口取得
      this.people = people

      // グラフへ追加
      this.chartOptions.series.push({
        prefCode: prefCode,
        name: prefName,
        data: people
      })
    }
  }
}
</script>
