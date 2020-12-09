<template>
  <v-app>
    <navbar/>
    <router-view/>
    <footerBar/>
  </v-app>
</template>

<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-login="samplebot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
<script type="text/javascript">
  function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  }
</script>

<script>
import navbar from './components/navbar/navbar.vue';
import footerBar from './components/footerBar/footerBar.vue';

export default {
  name: 'App',

  components: {
    navbar,
    footerBar,
  },
};
</script>
