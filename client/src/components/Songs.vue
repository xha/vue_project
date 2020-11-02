<template>
  <b-row class="justify-content-center">
    <b-col col sm="4">
      <panel title="Songs">
        <b-button variant="default float-right" @click="navegateTo({name: 'songs-create'})" slot="action">
          <b-icon icon="plus-circle" variant="primary" font-scale="2"></b-icon>
        </b-button>
        <div v-for="song in songs" :key="song.id">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </b-col>
  </b-row>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
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
