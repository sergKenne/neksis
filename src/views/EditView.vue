<template>
  <div class="container content">
    <h1 class="content__title">Edit post</h1>
    <form @submit.prevent="editPost" class=" content__form">
      <InputForm name="title" :value="post?.title" @onInput="handleChange" />
      <InputForm name="description" :value="post?.description" @onInput="handleChange" />
      <Checkbox :value="post?.published" @onCheck="handleCheckbox" />
      <button class="content__btn" type="submit">Edit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputForm from '@/components/InputForm.vue';
import Checkbox from '@/components/Checkbox.vue';
import { useRoute, useRouter, } from 'vue-router';
import { onMounted, reactive } from 'vue';
const route = useRoute()
const router = useRouter()
const post = reactive({
  title: "",
  description: "",
  published: false
})

const handleChange = (payload: { name: string, value: string }) => {
  post[payload.name] = payload.value;
}

const handleCheckbox = (payload: boolean) => {
  post.published = payload
}

const editPost = () => {
  fetch(`http://localhost:3000/posts/${route.params.id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: post.title,
      description: post.description,
      published: post.published,
      published_from: new Date().toLocaleDateString().split("/").reverse().join("-")
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(res => {
      console.log(res.json())
      router.push({ name: "posts" })
    })
}

onMounted(() => {
  fetch(`http://localhost:3000/posts/${route.params.id}`)
    .then(res => res.json())
    .then(data => {
      post.title = data.title;
      post.description = data.description;
      post.published = data.published
    })
    .catch(err => {
      console.log(err.message)
    })
})
</script>

<style lang="scss" scoped>
.content {

  &__title {
    color: #277777;
    font-weight: 600;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin: 24px;
  }

  &__form {
    max-width: 450px;
    margin: 60px auto 0px;
  }

  &__btn {
    margin-top: 24px;
    font-weight: 400;
    color: #ffffff;
    background-color: #277;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:hover {
      background-color: #299;
    }
  }
}
</style>