<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'App',
  created() {
    console.log('app')
    console.log(router)
  }
}
</script>
