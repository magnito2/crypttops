<template>
<ModalBase lightBg :closeModal="closeModal">
    <div class="form-update">
        <div class="form-cont">
            <div class="key-title">
                <p class="title-div">Updating Gift Tier</p>
                <p class="mini-title">Status {{ this.modelValue.status }}</p>
                <div class="activate-btn">
                    <MediumButton 
                        :value="this.modelValue.status !== 'Active' ? 'Activate' : 'Deactivate'"
                        :action="toggleActive"
                    />
                </div>
            </div>
            <div class="input-select">
                <div class="inputs-wrapper">
                    <!-- select -->
                    <FormSelect 
                        :options="['Tier 0', 'Tier 1', 'Tier 2']"
                        defaultText="Select Tier"
                        v-model="selectedTier"
                    />
                    <!--date input-->
                    <DatePicker v-model="selectedDate"/>

                    <InputCustom value="Trading Volume" :action="alert"/>

                    <InputCustom value="Rewards" :action="alert"/>
                </div>
                
                <MediumButton value="Update Changes" :action="closeModal" />

            </div>
        </div>
    </div>
</ModalBase>
</template>

<script>
import ModalBase from './ModalBase.vue';
import Submit from '../form-elements/Submit.vue';
import DatePicker from '../form-elements/DatePicker.vue';
import FormSelect from '../form-elements/FormSelect.vue';
import { MediumButton } from '../buttons';
import { InputCustom } from '../form-elements';

export default {
    props: {
        modelValue: Object, closeModal: Function
    },
    components: { DatePicker, Submit, FormSelect, MediumButton, ModalBase, InputCustom },
    methods: {
        toggleActive(){
            this.modelValue.status = this.modelValue.status === 'Active' ? 'Inactive' : 'Active'
        },

    },
    computed: {
        selectedDate: {
            get(){
                return this.modelValue.date;
            },
            set(value){
                this.modelValue.date = value;
            }
        },
        selectedTier: {
            get(){
                return this.modelValue.tier;
            },
            set(value){
                this.modelValue.tier = value;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.form-update{
    width: 596px;
    height: 452px;
    color:#9f9f9f;
    background: #1D1D1D;
    border-radius: 30px;
    padding: 10px;

    .form-cont{
        margin:24px 48px;
        display:grid;
    }
}
.key-title {
    display:flex;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;

    p {
        padding: 0;
        margin: 0;
    }

    .mini-title {
        margin:auto;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        margin-left:48px;
    }

    .activate-btn {
        width: 135px;
    }
}

.input-select {
    padding: 5px 15px;
    .inputs-wrapper {
        width: 300px;
    }
}
</style>