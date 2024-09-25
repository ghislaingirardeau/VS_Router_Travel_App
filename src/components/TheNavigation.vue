<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="brazil">Brazil</RouterLink>
    <RouterLink to="panama">Panama</RouterLink>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#nav .custom-link-active-class {
  color: red;
  border-bottom: 2px solid red;
}
</style>
