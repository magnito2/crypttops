<template>
    <div class="input-item" id="input">
        <img v-if="icon" :src="icon" alt="" class="icon-sign-1"/>
        <input 
            :type="type" 
            :placeholder="placeholderComputed" 
            :required ="required" 
            :value="modelValue"
            @input='$emit("update:modelValue", $event.target.value)'
        >
    </div>
</template>
<script>
import profileIcon from '../../assets/Profile.svg';
import frameIcon from '../../assets/Frame.svg';
import lockIcon from '../../assets/lock.svg';

export default {
    name: 'FormInput',
    props: {
        placeholder : String,
        type: { type: String, default: 'text' },
        required: { type: Boolean, default: true},
        modelValue: String
    },
    components: {
        profileIcon,
        frameIcon,
        lockIcon
    },
    computed: {
        icon(){

            if(this.type == 'text' && this.placeholder && this.placeholder.toLowerCase().includes('username')) return profileIcon;
            else if(this.type == 'email') return frameIcon;
            else if(this.type == 'password') return lockIcon;

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