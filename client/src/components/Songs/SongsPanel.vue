<template>
    <panel title="Songs">
        <b-button variant="default float-right" @click="navegateTo({name: 'songs-create'})" slot="action">
            <b-icon icon="plus-circle" variant="primary" font-scale="2"></b-icon>
        </b-button>
        <b-row class="mb-2 border-bottom font-weight-bold text-primary">
            <b-col col sm="3">T&iacute;tulo</b-col>
            <b-col col sm="3">Artista</b-col>
            <b-col col sm="3">Album</b-col>
            <b-col col sm="3"></b-col>
        </b-row>
        <b-row class="mb-2 border-bottom" v-for="song in songs" :key="song.id">
            <b-col col sm="3">
            {{song.title}}
            </b-col>
            <b-col col sm="3">
            {{song.artist}}
            </b-col>
            <b-col col sm="3">
            {{song.album}}
            </b-col>
            <b-col col sm="3" class="pb-1">
            <b-button variant="info" @click="navegateTo({name: 'songs-update', params: {songId: song.id}})" slot="action">
                Update
            </b-button>
            </b-col>
        </b-row>
    </panel>
</template>

<script>
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
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
