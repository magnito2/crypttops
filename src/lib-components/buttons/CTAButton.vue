<template>
    <div class="cta" id="cta-but" @Click.prevent="action">
        {{ value }}
    </div>
</template>

<script>
export default {
    name: 'CTAButton',
    props: {
        action: {
            required: true,
            type: Function
        },
        value: {
            required: true,
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.cta {
    margin:auto 12px;
    display: flex;
    justify-content: space-evenly;
    width:100%;
    align-items: center;

    cursor:pointer;
    border: 1px solid #FFA800;
    border-radius: 7px;
    color:#FFA800;
    align-content: center;
    padding:12px;
    background: transparent;
    text-transform: capitalize;

    &:hover{
        background: #FFA800;
        color: #000;
    }

    a {
        text-decoration: none;
        color:#9f9f9f;
        margin:auto;
    } 

}
</style>