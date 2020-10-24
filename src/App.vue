<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  html.style.fontSize = window.innerWidth / 10 + "px";
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = fontSize + "px";
  // console.log(html.style.fontSize);
});
</script>

<style>
</style>
