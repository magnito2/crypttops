<template>
  <ModalBase :closeModal="closeModal">
    <div class="container-key">
        <div class="form-key">
            <div class="cont-key">
                <div class="key-title">
                    <p>Setup Your Keys</p>
                </div>
                <form action="POST" id="form">
                    <APIInput type="key" v-model="key" />
                    <APIInput type="secret" v-model="secret" />
                </form>
                <div class="redirect-key ">
                    <input type="submit" value="Finish Setup" @click.prevent="submit" >
                    <a href="" @click.prevent="closeModal">Maybe Later</a>
                </div>
            </div>
        </div>
    </div>
  </ModalBase>
</template>

<script>
import ModalBase from './ModalBase.vue';
import APIInput from '../form-elements/APIInput.vue';
import Submit from '../form-elements/Submit.vue';

export default {
    name: 'APICredModal',
    props: {
        closeModal: Function,
        modelValue: Object
    },
    components: {
        ModalBase, APIInput, Submit
    },
    computed: {
        key: {
            get(){
                return this.modelValue.APIKey
            },
            set(value){
                this.modelValue.APIKey = value;
            }
        },
        secret: {
            get(){
                return this.modelValue.APISecret
            },
            set(value){
                this.modelValue.APISecret = value;
            }
        }
    },
    methods: {
        submit(){
            this.closeModal();

        }
    }
}
</script>

<style lang="scss" scoped>

.form-key{
    position: absolute;
    width: 707px;
    height: 382px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #1D1D1D;
    box-shadow: 0px 0px 67px 34px #161616;
    border-radius: 20px;
}
.cont-key{
    display: grid;
    margin:auto 48px;
}
.key-title{
    color:#9f9f9f;
    font-size:24px;
    font-weight: 400;
}

.redirect-key{
    display:flex;
    justify-content: space-between;
    margin: 24px 0;
  
    
}
.redirect-key  input {
    width:300px;
    margin:auto 0;
    cursor:pointer;
    height: 55px;
    border: none;
    background: #FFA800;
    box-shadow: 0px 0px 30px rgba(255, 168, 0, 0.77);
    border-radius: 7px;
    font-size:16px;
    font-weight: 500;
}
.redirect-key input:hover{
    border: 1px solid #131313;
    background: transparent;
    box-shadow: none;
    color: #9F9F9F;
}
.redirect-key a{
    text-decoration: none;
    color:#FFA800;
    margin: auto ;
}
.redirect-key a:hover{
    color: #9F9F9F;
}
</style>