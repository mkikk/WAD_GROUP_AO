<template>
  <div class="like">
    <button class="like" v-on:click="increaseLikes">
      <img class="like_picture" v-bind:src="img_path" alt="Like" />
    </button>
  </div>
</template>

<script>
export default {
  name: "likeBtn",
  props: ["img_path"],
  data: () => {
    return {
      count: 0,
    };
  },
  methods: {
    increaseLikes: () => {
      this.$store.dispatch("increaseLikesAct", this);
    },
  },
};
</script>
