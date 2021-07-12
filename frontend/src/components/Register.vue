<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>
            <v-card-text>
                <v-alert v-if="message" type="error" class="theme--light">
                  {{message.error}}
                </v-alert>
                <v-form @submit.prevent="handleRegister">
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="user.nickname"
                    id="nickname"
                    label="Nickname"
                    name="nickname"
                    prepend-icon="mdi-at"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="user.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>

                  <span>Already have an account? Login <router-link to="/">here.</router-link></span>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="#2554ff">Register</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
        </form>
    </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: '',
      dialog: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/home');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$store.dispatch('auth/register', this.user).then(
        (res) => {
          if(res.error){
             this.message = (res.error).toString()
             this.successful = false;
          }else{
            this.dialog = true;
          }
        }
      );
    },
    handleLogin() {
      this.dialog = false;
      this.$router.push('/login');
    }
  }
};
</script>