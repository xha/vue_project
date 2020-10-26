<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Registro</v-toolbar-title>
        </v-toolbar>

        <div class="m-4">
          <input type="email" id="email" placeholder="Correo" v-model="email" class="my-2" />
          <input type="password" id="password" placeholder="Clave" v-model="password" class="my-2" />
          <button class="btn btn-success my-2" @click="register">
            Registrar
          </button>
          <div class="text-danger mt-2" v-html="error" />
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  /*  watch: {
    email (value) {
      console.log('email cambiado', value)
    }
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
