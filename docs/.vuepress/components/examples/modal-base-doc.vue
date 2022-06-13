<template>
<div class="wrapper">
    <medium-button value="Open Modal" :action="toggleModal"/>
    <Teleport to="#modal-port">
        <modal-base v-if="showModal" :closeModal="closeModal" lightBg>
            <div class="modal-wrapper">
                <h3>Insert Content Here</h3>
            </div>
        </modal-base>
    </Teleport>
</div>
</template>

<script>
import { ModalBase } from '../../../../dist/esm/modals';
import { MediumButton } from '../../../../dist/esm/buttons';
export default {
    components: {
        ModalBase,
        MediumButton
    },
    data(){
        return {
            showModal: false
        }
    },
    methods: {
        closeModal(){
            this.showModal = false
        },
        toggleModal(){
            this.showModal = !this.showModal;
        }
    },
    beforeMount(){
        const elem = document.createElement('div');
        elem.setAttribute('id','modal-port');
        document.body.appendChild(elem);
    },
    unmounted(){
        const elem = document.getElementById('modal-port');
        elem.remove();
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 50%;
    padding: 10px;
}

.modal-wrapper {
    width: 300px;
    height: 200px;
    color:#9f9f9f;
    background: #1D1D1D;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;


}
</style>