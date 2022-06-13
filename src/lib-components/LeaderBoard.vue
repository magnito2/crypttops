<template>
  <div class="container-board col-7">
    <div class="title-board col-3">
      <img src="../assets/Chart.svg">
      <h3>Leaderboard</h3>
    </div>
    <div class="leader-table">
        <table>
          <colgroup>
            <col span="1" style="width: 10%">
            <col span="1" style="width: 25%">
            <col v-for="(pair, idx) in pairs" :key="idx" span="1" style="width: 15%">
            <col>
          </colgroup>
            <tr>
              <th wid>Rank</th>
              <th>Username</th>
              <th v-for="(pair, idx) in pairs" :key="idx">{{ pair }}</th>
            </tr>
            <tr v-for="(userData, idx) in data" :key="idx">
              <td>{{ startIndex + idx + 1 }}</td>
              <td>{{ userData.name }}</td>
              <td v-for="(pair, idx) in userData.pairs" :key="idx">
                <span v-if="pair > 0" class="pos">{{ pair }}%</span>
                <span v-else class="neg">{{ pair }}%</span>
            </td>
          </tr>
        </table>
        <hr/>
        <div class="paginator-wrapper">
          <Paginator
            :goTo="goTo"
            :totalPages="totalPages"
            :currentPage="currentPage" 
          />
        </div>
    </div>
  </div>
</template>

<script>
import { Paginator } from './other-elements';

export default {
    name: 'LeaderBoard',
    props: {
      pairs: Array, 
      data: Array, 
      handlePaginator: Function, 
      totalPages: Number, 
      currentPage: Number,
      pageItemsNo: Number,
    },
    components: {
      Paginator
    },
    computed: {
      startIndex(){
        return (this.currentPage - 1) * this.pageItemsNo;
      }
    },
    methods: {
      goTo(page){
        console.log('We got to Leaderboard')
        this.handlePaginator(page);
      }
    }

}
</script>

<style lang="scss" scoped>
  .container-board {
    background: #070707;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    color: #9f9f9f;
    margin: 10px 32px;
  }
  .title-board {
    display: flex;

    img {
      margin: 15px 20px 5px;
      max-height: 25px;
    }

    h3 {
      line-height: 1;
      margin: 15px 0 5px;
    }
  }

  .pos {
    color: lime;
  }
  .neg {
    color: red;
  }

  .leader-table {
      margin: 0;
      padding: 0;

      table {
          width:100%;
          overflow: hidden;
          th, td {
              text-align: left;
              font-size: 16px;
              padding: 5px;
          }

          th {
            font-weight: 400;
          }
      }

      hr {
        width: 95%;
        border: 1px solid #1d1d1d;
      }

      .paginator-wrapper {
        display: flex;
        justify-content: center;
      }
  }

</style>