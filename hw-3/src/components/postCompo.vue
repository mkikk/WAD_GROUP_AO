<template>
  <div class="postComp">
    <div class="post" v-for="post in postList" :key="post.id">
      <div class="postHeader">
        <div class="user">
          <img class="profile_picture" :src="post.author_path" alt="icon" />
          {{ post.author }}
        </div>
        <div class="date">
          {{ post.time }}
        </div>
      </div>
      <div class="post_picture">
        <img :src="post.photo_path" :alt="post.photo_alt" />
      </div>
      <div class="postBody">
        <h2 class="location">{{ post.title }}</h2>
        <p class="body">{{ post.body }}</p>
      </div>
      <div class="likes">
        <button class="likeBtn" v-on:click="increaseLikes(post)">
          <img class="like_picture" :src="post.like_path" alt="Like" />
        </button>
        <span class="nr_likes"> {{ post.likes }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postCompo",
  /*   data: function () {
    return {};
  }, */
  methods: {
    increaseLikes: function (post) {
      this.$store.dispatch("increaseLikesAct", post);
    },
  },
  computed: {
    postList() {
      return this.$store.getters.postList;
    },
  },
  /*   mounted() {
    this.$store.dispatch("getPosts");
  }, */
};
</script>

<style>
.postComp {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.postHeader {
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  margin: 0.5vw;
  font-size: 0.75rem;
}
.profile_picture {
  height: 24px;
  width: 24px;
  padding: 0px;
}

.user {
  display: flex;
  align-items: center;
  gap: 1vw;
}

.post {
  width: 60%;
  margin: 5vh;
  box-shadow: 0 0 20px rgba(33, 33, 33, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.postBody {
  width: 80%;
}
.likes {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2vh;
  margin-left: 20%;
  width: 100%;
}
.likeBtn {
  margin-right: 2vw;
  border-radius: 10px;
  border: 0px;
  width: 32px;
  height: 32px;
}
.likeBtn:hover {
  background-color: #2300c0;
  cursor: pointer;
}
.like_picture {
  padding: 0px;
  height: 24px;
  width: 24px;
}

.profile_picture {
  height: 16px;
  width: 16px;
}

.post_picture img {
  width: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
