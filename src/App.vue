<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App"
}
document.addEventListener('DOMContentLoader', () => {
  const html = document.querySelector('html')
  console.log(html);
  html.style.fontSize = window.innerWidth / 10 +'px'
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style>

</style>
