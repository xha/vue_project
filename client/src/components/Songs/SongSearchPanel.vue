<template>
  <panel title="Search">
    <b-input id="search" v-model="search" placeholder="Buscar Canción" />
  </panel>
</template>

<script>
//  import SongService from '@/services/SongService'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }

      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }

      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
