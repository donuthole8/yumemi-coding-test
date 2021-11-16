<script>
import { baseUrl, apiKey } from '@/assets/config.js'
import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data () {
    return {
      prefCode: 22,
      people: []
    }
  },
  async mounted () {
    // 都道府県名取得

    // APIにて人口構成取得
    await axios.get(baseUrl + `api/v1/population/composition/perYear?prefCode=` + this.prefCode + `&cityCode=-`, {
      headers: { 'X-API-KEY': apiKey }
    }).then(response => {
      for (let i = 0; i < response.data.result.data[0].data.length; i++) {
        this.people.push(response.data.result.data[0].data[i].value)
      }
    }
    )

    // グラフ描画
    this.renderChart({
      labels: ['1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040', '2045'],
      datasets: [
        {
          label: this.prefName,
          backgroundColor: '#f87979',
          data: this.people
        }
      ]
    })
  }
}
</script>
