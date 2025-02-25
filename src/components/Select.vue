
<template>
  <div class="setting-menu__select">
    <select v-model="value">
      <option
        v-for="option in collection"
        :key="option.value"
        :value="option.value"
      >{{ option.label }}</option>
    </select>
  </div>
  <button
    class="button"
    @click="apply"
  >
    Apply
  </button>
</template>

<script>
import {collectionLabel} from "../data/cards.js";

export default {
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
  emits:['apply'],
   methods:{
    apply(){
      this.$emit('apply', this.value)
    },
  }
}
</script>

<style scoped>
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
