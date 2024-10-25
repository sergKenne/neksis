<template>
  <div class="posts">
    <h1 class="posts__title">Posts</h1>
    <form class="posts__form">
      <input type="search" v-model="inputVal" class="posts__form-input" placeholder="Search...">
    </form>
    <Loading v-show="isLoading" />
    <div class="posts__items">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import debounce from 'lodash.debounce'
import Loading from "@/components/Loading.vue"
import Post from "@/components/Post.vue";

const isLoading = ref(true);
const posts = ref([])
const error = ref("")
const inputVal = ref("")


const fetchPosts = async (url: string) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    posts.value = data;
    isLoading.value = false
  } catch (err) {
    console.log(err)
    error.value = "Something went wrong...."
    isLoading.value = false
  }
}

watch(inputVal, debounce((newVal: string) => {
  const url = `http://localhost:3000/posts?title=${newVal}`
  fetchPosts(url)
}, 700))


onMounted(() => {
  fetchPosts('http://localhost:3000/posts')
})
</script>

<style lang="scss" scoped>
.posts {

  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding-bottom: 24px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    color: #277777;
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    margin: 24px;
  }

  &__form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 14px;
  }

  &__form-input {
    display: block;
    width: 300px;
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

  &__form-btn {
    height: 38px;
    width: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: .25rem;
  }

  &__form-icon {
    width: 22px;

  }
}
</style>