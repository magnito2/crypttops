import{o as e,c as i,a as s,a3 as h,t as c,m as d,F as k,l as m,D as P}from"./app.0c602c3b.js";import{s as p}from"./style-inject.es-1f59c1d0.4d4a4d30.js";var g={name:"MediumButton",props:{action:{type:Function,required:!0},value:{type:String,default:"Activate"}}};const x={class:"btn-wrapper"},w=["value"];function y(l,t,a,r,o,n){return e(),i("div",x,[s("input",{type:"submit",value:a.value,onClick:t[0]||(t[0]=h(function(){return a.action&&a.action(...arguments)},["prevent"]))},null,8,w)])}var _=`input[data-v-249211bd] {
  margin: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border: none;
  width: 100%;
  height: 37px;
  background: #FFA800;
  box-shadow: 0px 0px 12px #FFA800;
  border-radius: 7px;
}
input[data-v-249211bd][data-v-249211bd]:hover {
  background: #9f9f9f;
  box-shadow: none;
}

.wrapper[data-v-249211bd] {
  margin: 0;
  padding: 0;
}`;p(_);g.render=y;g.__scopeId="data-v-249211bd";g.__file="src/lib-components/buttons/MediumButton.vue";var v={name:"CTAButton",props:{action:{required:!0,type:Function},value:{required:!0,type:String}}};function C(l,t,a,r,o,n){return e(),i("div",{class:"cta",id:"cta-but",onClick:t[0]||(t[0]=h(function(){return a.action&&a.action(...arguments)},["prevent"]))},c(a.value),1)}var F=`.cta[data-v-36fc081c] {
  margin: auto 12px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  cursor: pointer;
  border: 1px solid #FFA800;
  border-radius: 7px;
  color: #FFA800;
  align-content: center;
  padding: 12px;
  background: transparent;
  text-transform: capitalize;
}
.cta[data-v-36fc081c][data-v-36fc081c]:hover {
  background: #FFA800;
  color: #000;
}
.cta[data-v-36fc081c] a[data-v-36fc081c] {
  text-decoration: none;
  color: #9f9f9f;
  margin: auto;
}`;p(F);v.render=C;v.__scopeId="data-v-36fc081c";v.__file="src/lib-components/buttons/CTAButton.vue";var f={name:"Pagination",props:{goToPage:Function,totalPages:Number,currentPage:Number,linksToDisplay:{type:Number,default:5}},computed:{pages(){const l=[],t=Math.floor(this.linksToDisplay/2);let a=this.currentPage-t,r=this.currentPage+t;a<1&&(r=r-a+1,a=1),r>this.totalPages&&(a=a-(r-this.totalPages+1),a<1&&(a=1),r=this.totalPages);for(let o=a;o<=r;o++)l.push(o);return l},showFirstPage(){return this.currentPage>Math.ceil(this.linksToDisplay/2)},showLastPage(){return this.totalPages-Math.floor(this.linksToDisplay/2)>this.currentPage}},methods:{handleClick(l){const t=l.target.dataset.val;switch(t){case"first":case"1":this.goToPage(1);break;case"last":this.goToPage(this.totalPages);break;case"prev":if(this.currentPage<=1)break;this.goToPage(this.currentPage-1);break;case"next":if(this.currentPage>=this.totalPages)break;this.goToPage(this.currentPage+1);break;default:this.goToPage(parseInt(t));break}}}};const T={class:"pagination-wrapper"},A={key:0},z={key:1},B={key:2},D=["data-val"],M={key:3},I={key:4},L={key:5};function N(l,t,a,r,o,n){return e(),i("div",T,[s("p",null,"Page "+c(a.currentPage)+" of "+c(a.totalPages),1),s("ul",null,[a.currentPage!==1?(e(),i("li",A,[s("div",{class:"pill",onClick:t[0]||(t[0]=function(){return n.handleClick&&n.handleClick(...arguments)}),"data-val":"prev"},c("<<"))])):d("v-if",!0),n.showFirstPage?(e(),i("li",z,[s("div",{class:"pill tablet",onClick:t[1]||(t[1]=function(){return n.handleClick&&n.handleClick(...arguments)}),"data-val":"first"},"First")])):d("v-if",!0),n.showFirstPage?(e(),i("li",B,"...")):d("v-if",!0),(e(!0),i(k,null,m(n.pages,(u,b)=>(e(),i("li",{key:b},[s("div",{class:P(["pill",{active:u==a.currentPage}]),onClick:t[2]||(t[2]=function(){return n.handleClick&&n.handleClick(...arguments)}),"data-val":u},c(u),11,D)]))),128)),n.showLastPage?(e(),i("li",M,"...")):d("v-if",!0),n.showLastPage?(e(),i("li",I,[s("div",{class:"pill tablet",onClick:t[3]||(t[3]=function(){return n.handleClick&&n.handleClick(...arguments)}),"data-val":"last"},"Last")])):d("v-if",!0),a.currentPage!==a.totalPages?(e(),i("li",L,[s("div",{class:"pill",onClick:t[4]||(t[4]=function(){return n.handleClick&&n.handleClick(...arguments)}),"data-val":"next"},c(">>"))])):d("v-if",!0)])])}var j=`.pagination-wrapper[data-v-2943a050] {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
}
.pagination-wrapper[data-v-2943a050] ul[data-v-2943a050] {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  color: #9f9f9f;
}
.pagination-wrapper[data-v-2943a050] ul[data-v-2943a050] li[data-v-2943a050] {
  list-style-type: none;
  margin: 5px;
}
.pagination-wrapper[data-v-2943a050] ul[data-v-2943a050] li[data-v-2943a050] .pill[data-v-2943a050] {
  background: #1d1d1d;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
}
.pagination-wrapper[data-v-2943a050] ul[data-v-2943a050] li[data-v-2943a050] .pill[data-v-2943a050][data-v-2943a050]:hover {
  background: #ffa800;
  color: #1d1d1d;
}
.pagination-wrapper[data-v-2943a050] ul[data-v-2943a050] li[data-v-2943a050] .pill[data-v-2943a050].active[data-v-2943a050] {
  border: 2px solid #ffa800;
  width: 27px;
  height: 27px;
}
.pagination-wrapper[data-v-2943a050] ul[data-v-2943a050] li[data-v-2943a050] .pill[data-v-2943a050].tablet[data-v-2943a050] {
  width: 54px;
  border-radius: 5px;
}
.pagination-wrapper[data-v-2943a050] p[data-v-2943a050] {
  position: absolute;
  left: 80px;
  font-size: 12px;
}`;p(j);f.render=N;f.__scopeId="data-v-2943a050";f.__file="src/lib-components/buttons/Pagination.vue";export{v as a,f as b,g as s};
