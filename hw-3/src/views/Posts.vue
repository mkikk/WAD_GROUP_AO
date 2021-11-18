<template>
  <div class="posts">
    <h1>Latest Posts</h1>
    <button class="resetLikes" v-on:click="resetLikes">Reset Likes</button>
    <postCompo></postCompo>
  </div>
</template>
<script>
import postCompo from "@/components/postCompo.vue";
export default {
  name: "posts",
  components: {
    postCompo,
  },
/*   data() {
    return {};
  }, */
  methods: {
    resetLikes: function () {
      this.$store.dispatch("resetLikesAct");
    },
  },
};
</script>

<style>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  width: 60%;
}
.resetLikes {
  margin: 20px;
  border-radius: 20px;
  padding: 8px 16px 8px 16px;
}

.resetLikes:hover {
  background-color: #0e049e;
  color: #ffffff;
  cursor: pointer;
}
</style>