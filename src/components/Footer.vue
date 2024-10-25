<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} All Rights Reserved...</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  background-color: #277;
  color: #ffffff;
  display: flex;
  align-items: center;
}
</style>