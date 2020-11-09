<template>
  <b-row class="justify-content-center">
    <b-col col sm="4">
      <b-card no-body>
        <b-card-header class="text-primary">
          <h3>Registro</h3>
        </b-card-header>
        <b-card-body>
          <form name="vue-register" autocomplete="off">
            <b-card-text>
              <label>Email</label>
              <b-input type="email" id="email" placeholder="Correo" v-model="email" label="Email" />
            </b-card-text>
            <b-card-text>
              <label class="w-100">Password</label>
              <b-input class="form-control" type="password" id="password" placeholder="Clave" v-model="password" autocomplete="new-password" />
            </b-card-text>
          </form>
          <b-button variant="success" class="mt-2" @click="register">
            Registrar
          </b-button>
        </b-card-body>
        <b-card-footer>
          <div class="text-danger" v-html="error" />
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
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
