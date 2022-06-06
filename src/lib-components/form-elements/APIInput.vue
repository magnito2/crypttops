<template>
    <div class="wrapper">
        <label for="input" class="key">
            <inline-svg :src="icon"></inline-svg>
            <span class="form-label">{{ label }}</span><div class="slash"></div>
            <input :type="computedType" :placeholder="placeholder" id="input">
        </label>
    </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
    name: 'APIInput',
    props: {
        type: {
            type: String,
            required: true,
            validator(value) {
                // The value must match one of these strings
                return ['key', 'secret'].includes(value)
            }
        }
    },
    components: {
        InlineSvg
    },
    computed: {
        computedType(){
            if(this.type == 'key') return 'text';
            return 'password';
        },

        placeholder(){
            if(this.type == 'key') return 'Enter Your API Key';
            return  'Enter Your API Secret';
        },
        icon(){
            if(this.type == 'key') {
                try{
                    return require('../../assets/Setting.svg');
                } catch(err){
                    return '/assets/Setting.svg';
                }
                
            }
            try{
                return require('../../assets/lock.svg');
            } catch(err){
                return '/assets/lock.svg';
            }
        },
        label(){
            if(this.type == 'key') return 'Key';
            return 'Secret';
        }
    }
}
</script>

<style lang="scss" scoped>
.key {
    position: relative;
    input{
        margin: 12px auto;
        height:55px;
        box-sizing: border-box;
        width: 406px;
        background: #131313;
        border: 1px solid #3B3B3B;
        border-radius: 7px;
        padding-left:158px;
        color: #9F9F9F;
        font-size: 14px;
    }

    img{
        position: absolute;
        right: 90%;
        top: 50%
    }

    .form-label{
        position: absolute;
        right:75%;
        color: #9F9F9F;
    }

    img, .form-label{
        top:0%;
    }
    .slash{
        position: absolute;
        width: 23px;
        height: 0px;
        top:50%;
        right: 65%;
        border: 0.5px solid #9F9F9F;
        transform: rotate(90deg);
    }
}

</style>