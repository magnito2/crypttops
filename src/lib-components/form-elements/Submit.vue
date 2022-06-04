<template>
    <div class="input-item submit" >  
        <input type="submit" :value="value">
    </div>
</template>

<script>
export default {
    name: 'Submit',
    props: {
        value: {
            required: true,
            type: String,
            default: 'Submit'
        }
    }
}
</script>

<style lang="scss" scoped>
input{
    height:55px;
    border-radius: 7px;
    box-sizing: border-box;
    border:1px solid #3b3b3b;
    width:100%;
    padding:12px 68px;
    display:flex;
    margin: 18px 0;
    font-size: 18px;
    text-decoration: none;
    color:#9f9f9f;
}
.submit input{
    font-size: 16px;
    margin-top:24px;
    background: #FFA800;
    box-shadow: 0px 0px 30px rgba(255, 168, 0, 0.77);
    border-radius: 7px;
    justify-content: center;
    text-decoration: none;
    border: 1px solid #FFA800;
    cursor:pointer;
    width:100%;
    height:55px;
    border-radius: 7px;
    box-sizing: border-box;
}
.submit input:hover{
    background:#131313;
    color:#9f9f9f;
    box-shadow: none;
    border:1px solid #131313;
}
input{
    background: #131313;
}
.input-item span:hover {
    cursor: pointer;
    text-decoration:3px solid #FFA800 underline;
}
</style>