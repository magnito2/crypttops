<template>
    <div @click="checkClick" class="modal flex" :class="{'light-bg' : lightBg }" ref="modalWrap">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalBase',
    props: {
      closeModal: {
        type: Function,
        required: true
      },
      lightBg: {
        type: Boolean,
        default: false
      }
    },
    created(){
      document.body.classList.add("stop-scrolling");
    },
    unmounted(){
      document.body.classList.remove("stop-scrolling");
    },
    methods: {
      checkClick(e) {
            if(e.target === this.$refs.modalWrap){
                this.closeModal();
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.modal {
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top:0;
  color: #9f9f9f;
  background: rgba(29, 29, 29, 0.05);
  mix-blend-mode: normal;
  backdrop-filter: blur(16px);

  &.light-bg {
    background: rgba(59, 59, 59, 0.76);
    backdrop-filter: none;
  }

  
}
</style>