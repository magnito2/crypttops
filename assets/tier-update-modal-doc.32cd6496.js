import{b as c}from"./TierUpdateModal-04fe4e9a.50cd7794.js";import"./DatePicker2-2be58a04.de01e14d.js";import{s as i}from"./Pagination-38391c2e.37a12abd.js";import{_ as p,r as l,o as t,c as u,b as _,q as r,m as M,a2 as f}from"./app.0c602c3b.js";import"./style-inject.es-1f59c1d0.4d4a4d30.js";const v={components:{TierUpdateModal:c,MediumButton:i},data(){return{tierUpdateData:{tier:"Tier 0",date:new Date().toISOString().substr(0,10),status:"Inactive",tradingVol:"0",rewards:"0"},showModal:!1}},methods:{toggleModal(){this.showModal=!this.showModal},closeModal(){this.showModal=!1}},beforeMount(){const e=document.createElement("div");e.setAttribute("id","modal-port"),document.body.appendChild(e)},unmounted(){document.getElementById("modal-port").remove()}},h={class:"wrapper"};function b(e,a,U,g,o,d){const s=l("medium-button"),n=l("TierUpdateModal");return t(),u("div",h,[_(s,{value:"Open Modal",action:d.toggleModal},null,8,["action"]),(t(),r(f,{to:"#modal-port"},[o.showModal?(t(),r(n,{key:0,closeModal:d.closeModal,modelValue:o.tierUpdateData,"onUpdate:modelValue":a[0]||(a[0]=m=>o.tierUpdateData=m)},null,8,["closeModal","modelValue"])):M("",!0)]))])}var T=p(v,[["render",b],["__scopeId","data-v-ab492f06"],["__file","tier-update-modal-doc.vue"]]);export{T as default};
