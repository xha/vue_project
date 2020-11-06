<template>
  <b-row class="justify-content-center">
    <b-col col sm="6">
      <song-search-panel class="mb-2" />
      <songs-panel />
    </b-col>
  </b-row>
</template>

<script>
//  import SongService from '@/services/SongService'
import SongsPanel from './SongsPanel'
import SongSearchPanel from './SongSearchPanel'

export default {
  components: {
    SongsPanel,
    SongSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navegateTo (ruta) {
      this.$router.push(ruta)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
