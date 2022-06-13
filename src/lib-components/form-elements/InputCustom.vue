<template>
    <div class="input-select-item">
        <img src="../../assets/activity.svg" class="icon" alt="" @click="action">
        <p>{{ value }}</p>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        value: { type: String, required: true },
        action: { type: Function, required: true }
    }
}
</script>

<style lang="scss" scoped>
.input-select-item{
    position: relative;
    display: flex;
    width:100%;
    background:#131313;
    height:55px;
    border-radius: 7px;
    box-sizing: border-box;
    border:2px solid #3b3b3b;
    padding:auto 18px;
    margin: 18px 0;
    font-size: 14px;
    color:#9f9f9f;
    background: #131313;

    .icon{
        height: 20px;
        padding: 16px 16px;
    }
    p {
        padding: auto 16px;
    }
}
</style>