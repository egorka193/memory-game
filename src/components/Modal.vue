<template>
  <div class="modal">
    <div
      class="overlay"
      @click="close"
    />
    <div class="modal-content">
      <div class="modal__top">
        <h3 class="modal__top-title">
          {{ title }}
        </h3>
        <div
          class="modal__top-cross"
          @click="close"
        >
          &#10006;
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, context) {
    const close = () => {
      context.emit('close');
    };

    return {
      close,
    };
  },
};
</script>

<style>
.modal-content{
  background-color: rgb(107 169 7);
  width: 500px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  cursor: pointer;
}
.modal__top-title {
    margin: 10px;
    color: rgb(215, 181, 80);
    font-weight: 600;
    display: flex;
    justify-content: center;
}
.modal__top-cross {
    cursor: pointer;
    color: black;
    position: absolute;
    right: 20px;
    top: 10px;
}

.modal__top-cross:hover{
    transition: all 0.5s ease;
    color: aliceblue;
  }
</style>
