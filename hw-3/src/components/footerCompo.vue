<template>
  <div class="footerCompo">
    <a href="https://github.com/mkikk/WAD_GROUP_AO">Link to Github Repo</a> |
    <router-link to="/contact">Contact Us</router-link>
  </div>
</template>

<script>
export default {
  name: "footerCompo",
  data() {
    return {};
  },
};
</script>

<style>
.footerCompo a,
router-link {
  color: #eeeeee;
}
.footerCompo {
  margin: 5vh;
}
</style>
