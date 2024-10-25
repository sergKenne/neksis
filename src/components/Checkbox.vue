<template>
  <div class="checkbox">
    <label for="check" class="checkbox__label">
      <span>Published:</span>
      <input type="checkbox" id="check" @input="emit('onCheck', ($event.target as HTMLInputElement).checked)"
        :checked="props.value" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const props = defineProps<{ value: boolean | undefined }>()
const emit = defineEmits(['onCheck'])

</script>

<style lang="scss" scoped>
.checkbox {
  margin-bottom: 24px;
  margin-top: 18px;

  &__label {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #212529;
    cursor: pointer;

    input {
      width: 18px;
      height: 18px;
    }
  }
}
</style>