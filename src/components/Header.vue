<template>
  <div class="header">
    <div class="container header__content">
      <router-link :to="{ name: 'posts' }" class="header__logo">
        <img src="../assets/images/logo.jpeg" alt="Logo" class="header__logo-img">
        <span>Hексин</span>
      </router-link>
      <nav class="header__nav">
        <router-link class="header__nav-link" :to="{ name: 'posts' }">Home</router-link>
        <router-link class="header__nav-link" :to="{ name: 'create' }">Create</router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #277;
  color: #ffffff;

  &__content {
    display: flex;
    align-items: center;
    height: inherit;
  }

  &__logo {
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;

  }

  &__logo-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 8px;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 60px;
  }

  &__nav-link {
    color: #ffffff;
    text-decoration: none;
    height: 60px;
    line-height: 60px;
    padding-left: 8px;
    padding-right: 8px;

    &.router-link-active.router-link-exact-active {
      background-color: #299;
    }
  }

}
</style>