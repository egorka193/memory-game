<template>
  <Modal
    :title="modalTitle"
    @close="restart"
  >
    <div class="finish">
      <p class="finish__score">
        {{ count }}
      </p>
      <button
        class="button"
        @click="restart"
      >
        RESTART
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: { Modal },
  props: {
    collectionLength: {
      type: Number,
      required: true,
    },
  },
  emits: ['restart'],
  computed: {
    selectedCards() {
      return this.$store.state.selectedCards.length;
    },
    currentCollection() {
      return this.$store.getters.currentCollection.length;
    },
    count() {
      return `${this.selectedCards}/${this.currentCollection}`;
    },
    modalTitle() {
      if (this.selectedCards.length === 12) {
        return 'YOU WIN';
      }
      return 'NICE TRY';
    },
  },
  methods: {
    restart() {
      this.$store.dispatch('restart');
    },
  },
};
</script>

<style scoped>
.finish__title{
  position: relative;
  display: flex;
  justify-content: center;
  color: rgb(215, 181, 80);
  font-weight: 600;
  margin: 10px;
}
.button{
  display: block;
  margin: 10px auto;
  cursor: pointer;
}
.finish__score{
  display: flex;
  justify-content: center;
  color: rgb(215, 181, 80);
  font-weight: 600;
  margin: 10px;
  font-size: 32px;
}
.finish__cross{
  cursor: pointer;
  color: black;
  position: absolute;
  right: 20px;
  top: 10px;
}
.finish__cross:hover{
  transition: all 0.5s ease;
  color: aliceblue;
}
</style>
