<template>
  <div class="container content">
    <h1 class="content__title">Create post</h1>
    <form @submit.prevent="createPost" class="content__form">
      <p v-if="info" class="content__info-msg">{{ info }}</p>
      <InputForm name="title" :value="post.title" placeholder="Title" :msg="msg" @onInput="handleChange" />
      <InputForm name="description" :value="post.description" placeholder="Description" @onInput="handleChange" />
      <Checkbox :value="post.published" @onCheck="handleCheckbox" />
      <button class="content__btn">Create Post</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputForm from '@/components/InputForm.vue';
import Checkbox from '@/components/Checkbox.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const post = reactive({
  title: "",
  description: "",
  published: false
})

const msg = ref<string>("")
const info = ref<string>("")

const handleChange = (payload: { name: string, value: string }) => {
  post[payload.name] = payload.value;
}

const handleCheckbox = (payload: boolean) => {
  post.published = payload
}

const createPost = () => {
  if (post.title.trim().length < 1 || post.description.trim().length < 1) {
    info.value = "все поля обязательны для заполнения"
    if (post.title.trim().length > 50) {
      msg.value = "строка, не более 50 символов"
    }
  } else {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        description: post.description,
        published: post.published,
        published_from: new Date().toLocaleDateString().split("/").reverse().join("-")
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        console.log(res)
        router.push({ name: 'posts' })
      })
      .catch(err => console.log(err.message))
  }
}

</script>

<style lang="scss" scoped>
.content {

  &__info-msg {
    position: absolute;
    left: 0px;
    top: 20px;
    color: orange;
  }

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
    margin: 0px auto;
    padding-top: 60px;
    position: relative;
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