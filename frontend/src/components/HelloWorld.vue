<template>
    <div class="vue-tempalte">
        <form class="center-all">
            <h3>Hello World!, </h3>
            <v-btn @click.prevent="logOut" color="#2554ff">Logout</v-btn>
        </form>
    </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data(){
      return{
      info: null
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/');
      }
    }
  }
</script>