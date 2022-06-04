<template>
  <div class="input-item">
    <input type="checkbox" required ={true}>
    Agree to our <span>Terms</span> & <span>Conditions</span>
</div>
</template>

<script>
export default {
    name: 'Terms'
}
</script>

<style>
input{
    background: #131313;
}

input[type=checkbox] {
height:15px;
width:15px;
margin: auto;
margin-right:12px;
  background: #131313;
  cursor:pointer;
}
.input-item span:hover {
    cursor: pointer;
    text-decoration:3px solid #FFA800 underline;
}
</style>