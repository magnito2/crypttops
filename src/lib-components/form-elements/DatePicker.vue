<template>
    <div class="input-select-item">
        <img src="../../assets/calendar.svg" alt="">
        <p class="date" pattern="DD-MM-YY">
            <span>Start Date </span>|
        </p>  
        <input 
            type="date" 
            :value="modelValue"
            @input='$emit("update:modelValue", $event.target.value)'
        >
    </div>
</template>

<script>

export default {
    name: 'date-picker',
    props: ['modelValue'],
    emits: ['update:modelValue'],

}
</script>

<style lang="scss" scoped>
.input-select-item{
    background:#131313;
    height:55px;
    border-radius: 7px;
    box-sizing: border-box;
    border:2px solid #3b3b3b;
    width:100%;
    margin: 18px 0;
    display: flex;
    align-items: center;

    input{
        padding: 0 18px;
        font-size: 14px;
        color:#9f9f9f;
        background: #131313;
        border: none;

    }

    img{
        height: 20px;
        padding: 0 18px;
    }

    .date {
        padding: 0 18px 0 0;
        font-size: 12px;
    }
}
</style>