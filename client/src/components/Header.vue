<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="mb-2 header" fixed="top">
    <b-navbar-brand href="#" class="home" @click="navegateTo('/')" >Inicio</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="home" href="#" @click="navegateTo('/songs')">Browse</b-nav-item>
        <router-link class="nav-link" tag="a" :to="{name: 'songs'}">Igual</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items  -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" @click="navegateTo('/login')" v-if="!$store.state.isUserLoggedIn">Login</b-nav-item>
        <b-nav-item href="#" :to="{name: 'register'}" v-if="!$store.state.isUserLoggedIn">Register</b-nav-item>
        <b-nav-item href="#" @click="logout" v-if="$store.state.isUserLoggedIn">Logout</b-nav-item>
        <!--
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" @click="navegateTo('login')">Login</b-dropdown-item>
          <b-dropdown-item href="#" @click="navegateTo('register')">Register</b-dropdown-item>
        </b-nav-item-dropdown>
        -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    navegateTo (ruta) {
      this.$router.push(ruta)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>
