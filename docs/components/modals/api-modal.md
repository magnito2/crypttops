# API Modal
For API Inputs

## Preview

<Demo componentName="examples-api-modal-doc" />

## Usage
```js:no-v-pre
// 
<script>
import { APIModal } from '@magnito2/crypttops-library/modals';

export default {
    components: { APIModal },
    data(){
        return {
            APIData : {
                APIKey: '',
                APISecret: ''
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
        <APIModal v-if="showModal" :closeModal="closeModal" v-model="APIData" />
    </div>
</template>
```

## Props
- `showModal` - A bolean value via `v-if` to display modal
- `closeModal` - A function that when called will close the modal
- `lightBg` - A boolean value to make the background color more transparent
- `v-model` - v-model binding to an object containing fields with values `APIKey` and `APISecret`

## Note
A modal needs to be removed from the normal flow of the container, thus, the best place to 
insert it is before the `</body>` closing tag.
Thus, the modal should be located in the root component at the bottom, or in a `<Teleport>` 
vue element which references an element near the bottom of the page.