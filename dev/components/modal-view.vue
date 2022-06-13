<template>
    <div class="wrapper">
        <CTA 
            value="Open Modal"
            :action="toggleModal"
        />
    </div>
    <div class="results">
        <p>API Key is : {{ APIData.APIKey }}</p>
        <p>API Secret is : {{ APIData.APISecret }}</p>
    </div>
    <div class="modal-wrapper">
        <Teleport to="#modal-port">
          <APIModal v-if="showModal" :closeModal="closeModal" v-model="APIData"/>
        </Teleport>
    </div>
</template>

<script>
import { CTAButton as CTA } from '../../dist/esm/buttons';
import { APIModal } from '../../src/lib-components/modals';

export default {
    name: "modal-view",
    components: {
        CTA,
        APIModal
    },
    data() {
        return {
            APIData : {
                APIKey: '',
                APISecret: ''
            },
            showModal: false
        };
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        },
        closeModal(){
            this.showModal = false;
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
    margin: 20px 0;
}

</style>