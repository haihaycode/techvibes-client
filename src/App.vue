<template>
  <div id="app">
    <component :is="currentLayout">
      <router-view />
    </component>

  </div>
</template>

<script>
import Admin from '@/view/admin.vue';
import Client from '@/view/client.vue';

export default {
  name: 'App',
  components: {

    Client,
    Admin,

  },
  computed: {
    currentLayout() {
      return this.$route.path.startsWith('/admin') ? Admin : Client;
    }

  }
}
</script>
