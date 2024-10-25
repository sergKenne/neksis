<template>
  <div class="loading">
    <img class="loading__img" src="../assets//images/spinner.gif" alt="loading...">
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;

  &__img {
    width: 120px;
    height: 120px;
  }
}
</style>