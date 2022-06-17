import{s as h}from"./style-inject.es-1f59c1d0.4d4a4d30.js";import"./Pagination-38391c2e.37a12abd.js";import"./TierUpdateModal-04fe4e9a.50cd7794.js";import"./DatePicker2-2be58a04.de01e14d.js";import{o as e,c as n,a,F as l,l as c,a0 as w,a1 as x,t as i,d as f}from"./app.0c602c3b.js";var v={name:"LeaderBoard",props:{pairs:Array,data:Array}},y="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Iconly/Light/Chart'%3e%3cg id='Chart'%3e%3cpath id='Line_182' d='M7.37145 10.2021V17.0623' stroke='%239F9F9F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Line_183' d='M12.0381 6.91895V17.0617' stroke='%239F9F9F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Line_184' d='M16.6285 13.8271V17.0622' stroke='%239F9F9F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Path' fill-rule='evenodd' clip-rule='evenodd' d='M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z' stroke='%239F9F9F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";const r=o=>(w("data-v-20ba7aa5"),o=o(),x(),o),C={class:"container-board col-7"},F=r(()=>a("div",{class:"title-board col-3"},[a("img",{src:y}),a("h3",null,"Leaderboard")],-1)),S={class:"leader-table"},$=r(()=>a("col",{span:"1",style:{width:"10%"}},null,-1)),j=r(()=>a("col",{span:"1",style:{width:"25%"}},null,-1)),B=r(()=>a("col",null,null,-1)),L=r(()=>a("th",{wid:""},"Rank",-1)),V=r(()=>a("th",null,"Username",-1)),I={key:0,class:"pos"},M={key:1,class:"neg"};function U(o,g,d,m,b,_){return e(),n("div",C,[F,a("div",S,[a("table",null,[a("colgroup",null,[$,j,(e(!0),n(l,null,c(d.pairs,(t,s)=>(e(),n("col",{key:s,span:"1",style:{width:"15%"}}))),128)),B]),a("tr",null,[L,V,(e(!0),n(l,null,c(d.pairs,(t,s)=>(e(),n("th",{key:s},i(t),1))),128))]),(e(!0),n(l,null,c(d.data,(t,s)=>(e(),n("tr",{key:s},[a("td",null,i(t.id),1),a("td",null,i(t.name),1),(e(!0),n(l,null,c(t.pairs,(p,k)=>(e(),n("td",{key:k},[p>0?(e(),n("span",I,i(p)+"%",1)):(e(),n("span",M,i(p)+"%",1))]))),128))]))),128))])])])}var P=`.container-board[data-v-20ba7aa5] {
  background: #070707;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  color: #9f9f9f;
  margin: 10px 32px;
}

.title-board[data-v-20ba7aa5] {
  display: flex;
}
.title-board[data-v-20ba7aa5] img[data-v-20ba7aa5] {
  margin: 15px 20px 5px;
  max-height: 25px;
}
.title-board[data-v-20ba7aa5] h3[data-v-20ba7aa5] {
  line-height: 1;
  margin: 15px 0 5px;
}

.pos[data-v-20ba7aa5] {
  color: lime;
}

.neg[data-v-20ba7aa5] {
  color: red;
}

.leader-table[data-v-20ba7aa5] {
  margin: 0;
  padding: 0;
}
.leader-table[data-v-20ba7aa5] table[data-v-20ba7aa5] {
  width: 100%;
  overflow: hidden;
}
.leader-table[data-v-20ba7aa5] table[data-v-20ba7aa5] th[data-v-20ba7aa5], .leader-table[data-v-20ba7aa5] table[data-v-20ba7aa5] td[data-v-20ba7aa5] {
  text-align: left;
  font-size: 16px;
  padding: 5px;
}
.leader-table[data-v-20ba7aa5] table[data-v-20ba7aa5] th[data-v-20ba7aa5] {
  font-weight: 400;
}`;h(P);v.render=U;v.__scopeId="data-v-20ba7aa5";v.__file="src/lib-components/LeaderBoard.vue";var u={},z="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='graph'%3e%3cg id='Graph'%3e%3cpath id='Stroke 1' fill-rule='evenodd' clip-rule='evenodd' d='M17.2779 13.8887C17.9527 13.8887 18.519 14.4455 18.4158 15.1118C17.8106 19.0318 14.4548 21.9423 10.4074 21.9423C5.92952 21.9423 2.30005 18.3129 2.30005 13.836C2.30005 10.1476 5.10215 6.71181 8.25689 5.93497C8.93479 5.7676 9.62952 6.24445 9.62952 6.94234C9.62952 11.6708 9.78847 12.8939 10.6864 13.5592C11.5843 14.2244 12.64 13.8887 17.2779 13.8887Z' stroke='%239F9F9F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath id='Stroke 3' fill-rule='evenodd' clip-rule='evenodd' d='M21.6926 9.95121C21.7463 6.91331 18.0147 2.01647 13.4674 2.10068C13.1137 2.107 12.8305 2.40173 12.8147 2.75437C12.7 5.25226 12.8547 8.4891 12.9411 9.95647C12.9674 10.4133 13.3263 10.7723 13.7821 10.7986C15.2905 10.8849 18.6453 11.0028 21.1074 10.6302C21.4421 10.5796 21.6874 10.2891 21.6926 9.95121Z' stroke='%239F9F9F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";const D={class:"container-stats col-7"},E=f('<div class="title-stats col-4"><img src="'+z+'" alt=""><h3>Personal Statistics</h3></div><div class="row-items"><div class="row-item"><p>Rank<span>1/123</span></p></div><div class="row-item"><p>ETHUSD<span class="pos">1.234%</span></p></div><div class="row-item"><p>BTCUSD<span class="pos">3.234%</span></p></div><div class="row-item"><p>XRPUSD<span class="pos">2.650%</span></p></div><div class="row-item"><p>EOUSD<span class="neg">-0.34564%</span></p></div></div>',2),H=[E];function R(o,g,d,m,b,_){return e(),n("div",D,H)}var Z=`
.col-4 {\r
    width: 40%;
}
.container-stats{\r
    background:#070707;\r
    display: flex;\r
    flex-direction:column;\r
    border-radius: 10px;\r
    color:#9f9f9f;\r
    margin:4px 32px;\r
    padding: 10px;
}
.row-items{\r
    display:flex;
}
.row-item{\r
    margin:auto;
}
.title-stats{\r
    margin:auto 12px;\r
    display: flex;\r
    justify-content: space-evenly;
}
.row-item span{\r
 margin: 0 8px;
}
.row-item .pos{\r
    color:lime;
}
.row-item .neg{\r
    color:red;
}\r
`;h(Z);u.render=R;u.__file="src/lib-components/PersonalStats.vue";export{u as a,v as s};
