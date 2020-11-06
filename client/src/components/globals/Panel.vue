<template>
  <b-row class="justify-content-center">
    <b-col col sm="12">
      <b-card no-body>
        <b-card-header class="text-info">
          <h3 class="w-75 text-left float-left">{{title}}</h3>
          <slot name="action" class="w-25"></slot>
        </b-card-header>
        <b-card-body>
          <slot>
            No slot content defined.
          </slot>
        </b-card-body>
        <b-card-footer>

        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>

export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
