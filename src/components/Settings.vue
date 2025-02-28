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
          :value="currentCollectionName"
          :options="collection"
          @update="changeValue"
        />
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
import { mapActions } from 'vuex';
import Modal from './Modal.vue';
import Select from './Select.vue';
// eslint-disable-next-line import/extensions
import { collectionLabel } from '../data/cards.js';

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Modal, Select },
  emits: ['closeSettings', 'restart', 'apply'],
  data() {
    return {
      collection: Object.keys(collectionLabel).map((item) => ({
        value: item,
        label: collectionLabel[item],
      })),
    };
  },
  methods: {
    ...mapActions(['closeSettings', 'giveUP']),
    // closeSettings() {
    //   this.$emit('closeSettings');
    // },
    // giveUP() {
    //   this.$emit('giveUP');
    // },
    // apply() {
    //   this.$emit('apply', this.value);
    // },
    apply() {
      this.$store.dispatch('apply', this.value);
    },
    changeValue(value) {
      this.value = value;
    },
  },
};
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
