# TierUpdateModal

## Preview

<Demo componentName="examples-tier-update-modal-doc" />

## Usage
```js:no-v-pre
// 
<script>
import { TierUpdateModal } from '@magnito2/crypttops-library/modals';

export default {
    components: { TierUpdateModal },
    data(){
        return {
            tierUpdateData: {
                tier: 'Tier 0',
                date: new Date().toISOString().substr(0, 10),
                status: 'Inactive',
                tradingVol: '0',
                rewards: '0'
            },
            showModal : false,
        }
    }
    methods: {
        toggleModal(){
            this.showModal = !this.showModal;
        },
        closeModal(){
            this.showModal = false;
        }
    }
}
</script>
<template>
    <div>
        <TierUpdateModal v-if="showModal" :closeModal="closeModal" v-model="tierUpdateData"/>
    </div>
</template>
```

## Props
- `showModal` - A boolean value to close the modal when false
- `closeModal` - A function that when called will close the modal
- `v-model` -  An object passed to v-model with fields `tier`, `date`, `status`, `tradingVol` and `rewards`

## Note
A modal needs to be removed from the normal flow of the container, thus, the best place to 
insert it is before the `</body>` closing tag.
Thus, the modal should be located in the root component at the bottom, or in a `<Teleport>` 
vue element which references an element near the bottom of the page.