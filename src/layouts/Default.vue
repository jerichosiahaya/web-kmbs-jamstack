<template>
  <div class="layout">
    <Navbar />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Default",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>
