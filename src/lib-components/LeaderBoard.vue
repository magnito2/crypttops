<template>
  <div class="container-board col-7">
    <div class="title-board col-3">
      <img src="../assets/Chart.svg">
      <h3>Leaderboard</h3>
    </div>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th v-for="(pair, idx) in pairs" :key="idx">{{ pair }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(userData, idx) in data" :key="idx">
                    <td>{{ idx+1 }}</td>
                    <td>{{ userData.name }}</td>
                    <td v-for="(pair, idx) in userData.pairs" :key="idx">
                        <span v-if="pair > 0" class="pos">{{ pair }}%</span>
                        <span v-else class="neg">{{ pair }}%</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>

export default {
    name: 'LeaderBoard',
    props: {'pairs': Array, 'data': Array},
    components: {

    },
    setup() {
        
    },

}
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }

  .container-board {
    background: #070707;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    color: #9f9f9f;
    margin: 10px 32px;
  }
  .title-board {
    margin: auto 14px;
    display: flex;
  }
  .title-board img {
    margin: auto 14px;
    max-height: 25px;
  }

  .pos {
    color: lime;
  }
  .neg {
    color: red;
  }

  .table {
      margin: auto 20px;
      width: 100%;
      table {
          width: 100%;
          th, td {
              text-align: left;
              font-size: 12px;
              padding: 5px;
          }
      }
  }
}
</style>