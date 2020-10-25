<template>
  <div>
    <h1>Registro</h1>
    <div class='row justify-content-center'>
      <div class='col-sm-4'>
        <label>Email</label>
        <input type="email" id="email" placeholder="Correo" class="form-control" v-model="email" />
      </div>
    </div>
    <div class='row justify-content-center mt-2'>
      <div class='col-sm-4'>
        <label>Password</label>
        <input type="password" id="password" placeholder="Clave" class="form-control" v-model="password" />
      </div>
    </div>
    <div class='row justify-content-center mt-2'>
      <div class='col-sm-4'>
        <button class="btn btn-success" @click="register">
          Registrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: 'abcx',
      password: '123'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  watch: {
    email (value) {
      console.log('email cambiado', value)
    }
  }
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
