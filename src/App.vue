<template>
  <div>
    <router-link to="/success"></router-link>
    <router-link to="/cancel"></router-link>

    <router-view></router-view> <!-- This is where the components will be displayed -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
