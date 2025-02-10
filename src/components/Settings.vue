
<template>
  <Modal
    title="Settings"
    @close="closeSettings"
  >
    <div class="setting__menu">
      <div class="menu__item">
        <div class="menu__item-finish">
          <button 
            class="button"
            @click="giveUP"
          >
            GIVE UP
          </button>
        </div>
      </div>
      <div class="menu__item">
        <div class="collection-selector__label">
          You can select another collection of cards:
        </div>
        <div class="custom-select">
          <select v-model="value">
            <option value="Anime">Anime</option>
            <option value="Dota">Dota heroes</option>
            <option value="Series">Pipular series</option>
          </select>
        </div>
        <button
          class="button"
          @click="apply"
        >
          Apply
        </button>
      </div>
    </div>
  </Modal>
</template>


<script>
import Modal from './Modal.vue';

export default {
  components: { Modal },
  data(){
    return{
      // value: 'kub'
    }
  },
  props:{
    massage:{
      type: String,
      required: true
    },
    setting: {
      type: Boolean,
      required: true
    }
  },
  emits:['closeSettings', 'giveUP', 'apply'],
  methods:{
    closeSettings(){
      this.$emit('closeSettings')
    },
    giveUP(){
      this.$emit('giveUP')
    },
    apply(){
      console.log(this.value);
      this.$emit('apply', this.value)
    },
  }
}
</script>


<style scoped>
.menu__item{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  flex-wrap: wrap;
  gap: 20px;
}
.collection-selector__label{
  font-weight: 600;
  color: rgb(215, 181, 80);
  font-size: 20px;
  margin-bottom: 5px;
}
.custom-select{
  min-width: 100px;
  position: relative;
}
.custom-select select{
  appearance: none;
  width: 100%;
  font-size: 14px;
  padding: 0.675em 6em 0.675em 1em;
  background-color: rgb(54, 85, 5);
  border: none;
  border-radius: 0.25rem;
  color: rgb(215, 181, 80);
  cursor: pointer;
}
.custom-select::before,
.custom-select::after {
  --size: 0.3rem;
  position: absolute;
  content: "";
  right: 5px;
  pointer-events: none;
}

.custom-select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid rgb(215, 181, 80);
  top: 35%;
}

.custom-select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid rgb(215, 181, 80);
  top: 60%;
}

</style>
