<template>
  <div class="post">
    <h2 class="post__title">{{ props.post.title }}</h2>
    <p class="post__desc">{{ props.post.description }}</p>
    <p class="post__desc">Published: <input type="checkbox" :checked="props.post.published" :disabled="true"></p>
    <p class="post__date">{{ props.post.published_from }}</p>
    <div class="post__buttons">
      <button class="post__btn">
        <router-link :to="{ name: 'edit', params: { id: props.post.id } }">Edit</router-link>
      </button>
      <button class="post__btn post__btn--delete" @click="isModal = true">Delete</button>
    </div>
    <Teleport to="#modal">
      <Modal v-if="isModal" :closeModal="closeModal" :id="props.post.id" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { IPost } from '../types/post';
import { defineProps, ref } from 'vue';
import Modal from './Modal.vue';

const props = defineProps<{ post: IPost }>()
const isModal = ref<boolean>(false)
const closeModal = () => { isModal.value = false }

</script>

<style lang="scss" scoped>
.post {
  color: #212529bf;
  line-height: 1.25;
  padding-bottom: 20px;
  padding: 16px;
  font-weight: 500;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .2);

  &__title {
    color: #000000;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__desc {
    color: #2e2c2c;
    font-weight: 400;
    font-weight: 18px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    input {
      width: 18px;
      height: 18px;
      margin-left: 6px;
    }
  }

  &__date {
    color: #212529bf;
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
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

    &--delete {
      background-color: rgb(229, 33, 33);

      &:hover {
        background-color: red;
      }
    }

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
}
</style>