<template>
  <div id="app" class="container py-5">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'
Vue.use(BootstrapVue)

export default {
  name: 'App',
}
</script>
