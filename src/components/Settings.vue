
<template>
  <Modal
    title="Settings"
    @close="closeSettings"
  >
    <div class="setting-menu">
      <div class="setting-menu__item">
        <div>
          <button 
            class="button"
            @click="giveUP"
          >
            GIVE UP
          </button>
        </div>
      </div>
      <div class="setting-menu__item">
        <div class="setting-menu__title">
          You can select another collection of cards:
        </div>
        <div class="setting-menu__select">
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
  props:{
    massage:{
      type: String,
      required: true
    },
    currentCollectionName:{
      type: String,
      required: true
    }
  },
  data(){
    return{
      value: this.currentCollectionName
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
      this.$emit('apply', this.value)
    },
  }
}
</script>


<style scoped>
.setting-menu__item{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  flex-wrap: wrap;
  gap: 20px;
}
.setting-menu__title{
  font-weight: 600;
  color: rgb(215, 181, 80);
  font-size: 20px;
  margin-bottom: 5px;
}
.setting-menu__select{
  min-width: 100px;
  position: relative;
}
.setting-menu__select select{
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
.setting-menu__select::before,
.setting-menu__select::after {
  --size: 0.3rem;
  position: absolute;
  content: "";
  right: 5px;
  pointer-events: none;
}

.setting-menu__select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid rgb(215, 181, 80);
  top: 35%;
}

.setting-menu__select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid rgb(215, 181, 80);
  top: 60%;
}

</style>
