<template>
    <div class="input-item" id="input">
        <img v-if="icon" :src="icon" alt="" class="icon-sign-1">
        <input :type="type" :placeholder="placeholderComputed" :required ="required">
    </div>
</template>
<script>
export default {
    name: 'FormInput',
    props: {
        placeholder : String,
        type: { type: String, default: 'text' },
        required: { type: Boolean, default: true}
    },
    computed: {
        icon(){
            let iconName;

            if(this.type == 'text' && this.placeholder.toLowerCase().includes('username')) iconName = 'Profile.svg'
            else if(this.type == 'email') iconName = 'Frame.svg'
            else if(this.type == 'password') iconName = 'lock.svg'

            if (iconName) return require(`../../assets/${iconName}`)
            return null
        },

        placeholderComputed(){
            if(this.placeholder) return this.placeholder;
            else if(this.type == 'text') return 'Your Prefered Username';
            else if(this.type == 'email') return 'Your Prefered Email Address';
            else if(this.type == 'password') return 'Enter Your Password';
            else return '';
        }
    }
}
</script>
<style lang="scss" scoped>
.input-item {
    position: relative;
    
    img{
        height:auto;
    }

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
        background: #131313;
    }

    .icon-sign-1{
        position: absolute;
        right: 90%;
        top: 22%;
    }

    span:hover {
    cursor: pointer;
    text-decoration:3px solid #FFA800 underline;
    }
}

</style>