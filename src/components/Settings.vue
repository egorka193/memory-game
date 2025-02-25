
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
        <Select 
          :currentCollectionName="currentCollectionName"
          @apply="apply"
        />
      </div>
    </div>
  </Modal>
</template>


<script>
import Modal from './Modal.vue';
import Select from './Select.vue';
import {collectionLabel} from "../data/cards.js";

export default {
  components: { Modal, Select },
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
      value: this.currentCollectionName,
      collection: Object.keys(collectionLabel).map((item) => {
        return {
          value: item,
          label: collectionLabel[item]
        }
      })
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
    apply(value){
      this.$emit('apply', value)
    },
  }
}
</script>


<style>
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
</style>
