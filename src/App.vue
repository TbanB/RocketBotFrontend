<template>
  <v-app>
    <navbar/>
    <router-view/>
  </v-app>
</template>

<script>
import navbar from './components/navbar/navbar.vue';

export default {
  name: 'App',

  components: {
    navbar,
  },
};
</script>
