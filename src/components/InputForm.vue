<template>
  <div class="input">
    <label :for="props.name" class="input__label">{{ props.name }}</label>
    <input class="input__field" type="text" :value="props.value" :id="props.name" :placeholder="props.placeholder"
      @input="emit('onInput', { name: props.name, value: ($event.target as HTMLInputElement).value })" />
    <span v-if="props.msg" class="input__info-msg">{{ props.msg }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{ name: string, placeholder?: string, value: string | undefined, msg?: string }>()
const emit = defineEmits(["onInput"])

</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
  position: relative;

  &__label {
    line-height: 1.5;
    color: #212529;
    text-align: left;
    margin-bottom: 6px;
  }

  &__field {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    }
  }

  &__info-msg {
    color: orange;
    position: absolute;
    left: 0;
    bottom: -18px;
  }
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

input:focus:-moz-placeholder {
  color: transparent;
}

input:focus::-moz-placeholder {
  color: transparent;
}

input:focus:-ms-input-placeholder {
  color: transparent;
}
</style>