<template>
  <b-row class="justify-content-center">
    <b-col col sm="4">
      <b-card no-body>
        <b-card-header class="text-info">
          <h3></h3>
        </b-card-header>
        <b-card-body>
          <b-button variant="primary" class="mt-2" @click="login">
            asd
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

export default {

  /*  watch: {
    email (value) {
      console.log('email cambiado', value)
    }
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
