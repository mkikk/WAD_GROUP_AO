<template>
  <header class="headerCompo">
    <div class="logo">
      <img src="@/assets/images/logo.jpg" />
    </div>
    <div class="routing">
      <router-link to="/login">Login</router-link> |
      <router-link to="/">Posts</router-link> |
      <router-link to="/contact">Contact Us</router-link>
    </div>
    <div class="user">
      <img src="@/assets/images/usericonthumbnail.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "headerCompo",
  data() {
    return {};
  },
};
</script>

<style>
img {
  height: 32x;
  width: 32px;
  padding-left: 30px;
  padding-right: 30px;
}
.headerCompo {
  padding: 2vh;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
