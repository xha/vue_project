<template>
  <b-row class="justify-content-center">
    <b-col col sm="4">
      <b-card no-body>
        <b-card-header class="text-info">
          <h3>Edit Song # </h3>
        </b-card-header>
        <b-card-body>
          <datos></datos>
          <b-button variant="success" class="mt-2">
            Crear Canción
          </b-button>
        </b-card-body>
        <b-card-footer>
          <div class="text-danger" id="error" />
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
//  import SongService from '@/services/SongService'
import Datos from '@/components/SongsDatos'

export default {
  components: {
    Datos
  },
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
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

</style>
