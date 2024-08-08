<template>
  <div id="app" :class="{ 'admin-active': isAdminPath, 'non-admin-active': !isAdminPath }">
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
    },
    isAdminPath() {
      return this.$route.path.includes('admin');
    }

  },
  watch: {
    '$route'(to) {
      this.updateCSSBasedOnURL(to.path);
    }
  },
  mounted() {
    this.updateCSSBasedOnURL(this.$route.path);
  },
  methods: {
    updateCSSBasedOnURL(path) {
      const tailwindCSS = document.getElementById('tailwindcssww');
      const flowbiteCSS = document.getElementById('flowbitecssww');
      if (path.includes('admin')) {
        flowbiteCSS.disabled = false;
        tailwindCSS.disabled = true;
      } else {
        flowbiteCSS.disabled = true;
        tailwindCSS.disabled = false;
      }
    }
  }
}
</script>


<style>
.my-custom-active-class {
  color: rgb(2, 0, 0);
}

.my-custom-exact-active-class {
  color: red;
}

/* Thay đổi con trỏ chuột khi rê qua các phần tử <td> và <th> */
td,
th {
  cursor: pointer;
}

.admin-active .my-custom-active-class {
  color: rgb(2, 0, 0);
}

.admin-active .my-custom-exact-active-class {
  color: red;
}

.non-admin-active .my-custom-active-class {
  color: aliceblue;
  /* or any other style */
}

.non-admin-active .my-custom-exact-active-class {
  color: aliceblue;
  font-weight: bolder;
  /* or any other style */
}
</style>
