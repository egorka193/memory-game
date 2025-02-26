<template>
  <div class="setting-menu__select">
    <select
      :value="value"
      @input="$emit('update', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ['update'],
};
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
