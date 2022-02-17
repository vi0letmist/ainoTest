<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="/home">
           ainosi
        </a>
        <div v-if="!$route.path ==='/home'">
        <ul class="nav navbar-nav flex-row float-right padding-10">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/register">Sign up</router-link>
          </li>
        </ul>
        </div>
        <div v-else>
          <ul class="nav navbar-nav flex-row float-right padding-10">
              <li class="nav-item" v-if='this.showButton'>
                <v-btn @click.prevent="logOut" class="btn btn-danger">Logout</v-btn>
              </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      source: String,
    },
    data() {
      return {
        showButton : false,
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    watch:{
      loggedIn(){
        this.showButton = this.loggedIn
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