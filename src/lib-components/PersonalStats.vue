<template>
  <div class="container-stats col-7">
    <div class="title-stats col-4">
        <img src="../assets/graph.svg" alt="">
        <h3 >Personal Statistics</h3>
    </div>
   
    <div class="row-items">
        <div class="row-item">
            <p>Rank<span>1/123</span></p>
        </div>
        <div class="row-item">
            <p>ETHUSD<span class="pos">1.234%</span></p>
        </div>
       
        <div class="row-item">
             <p>BTCUSD<span class="pos">3.234%</span></p>
        </div>
         <div class="row-item">
             <p>XRPUSD<span class="pos">2.650%</span></p>
        </div>
         <div class="row-item">
             <p>EOUSD<span class="neg">-0.34564%</span></p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.col-4 {
    width: 40%;
}

.container-stats{
    background:#070707;
    display: flex;
    flex-direction:column;
    border-radius: 10px;
    color:#9f9f9f;
    margin:4px 32px;
    padding: 10px;
}
.row-items{
    display:flex;
}
.row-item{
    margin:auto;
}
.title-stats{
    margin:auto 12px;
    display: flex;
    justify-content: space-evenly;
}
.row-item span{
 margin: 0 8px;
}
.row-item .pos{
    color:lime;
}
.row-item .neg{
    color:red;
}
</style>