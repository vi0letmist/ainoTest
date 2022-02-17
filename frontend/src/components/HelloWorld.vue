<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height center-all" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12 padding-30">
              <v-col class="shrink">
            <img alt="Vue logo" src="../assets/logo.png">
          </v-col>
            <h3>Hello World!, I am {{user}}</h3>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    created () {
      this.user = this.$store.state.auth.user.email;
    },
  }
</script>