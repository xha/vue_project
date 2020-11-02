<template>
  <b-row class="justify-content-center">
    <b-col col sm="6">
      <b-card no-body>
        <b-card-header class="text-info">
          <h3>Create Song</h3>
        </b-card-header>
        <b-card-body>
          <ValidationObserver v-slot="{ invalid }">
            <b-row class="text-left">
              <b-col col sm="12" md="6">
                <ValidationProvider rules="required|min:3" name="title">
                  <b-form-group slot-scope="{ valid, errors }" label="Título">
                      <b-form-input
                        type="text"
                        v-model="song.title"
                        :state="errors[0] ? false : (valid ? true : null)">
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col col sm="12" md="6">
                <ValidationProvider rules="required|min:3" name="artist">
                  <b-form-group slot-scope="{ valid, errors }" label="Artista">
                      <b-form-input
                        type="text"
                        v-model="song.artist"
                        :state="errors[0] ? false : (valid ? true : null)">
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col col sm="12" md="6">
                <ValidationProvider rules="required" name="genre">
                  <b-form-group slot-scope="{ valid, errors }" label="Género">
                      <b-form-input
                        type="text"
                        v-model="song.genre"
                        :state="errors[0] ? false : (valid ? true : null)">
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col col sm="12" md="6">
                <ValidationProvider rules="required" name="album">
                  <b-form-group slot-scope="{ valid, errors }" label="Album">
                      <b-form-input
                        type="text"
                        v-model="song.album"
                        :state="errors[0] ? false : (valid ? true : null)">
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col col sm="12" md="6">
                <label>Album Image Url</label>
                <b-input id="albumImageUrl" v-model="song.albumImageUrl" />
              </b-col>
              <b-col col sm="12" md="6">
                <label>Youtube Id</label>
                <b-input id="youtubeId" v-model="song.youtubeId" />
              </b-col>
              <b-col col sm="12">
                <label>Lírica</label>
                <b-form-textarea id="textarea" v-model="song.lyrics" rows="6" max-rows="6"></b-form-textarea>
              </b-col>
              <b-col col sm="12">
                <label>Tab</label>
                <b-form-textarea id="textarea" v-model="song.tab" rows="6" max-rows="6"></b-form-textarea>
              </b-col>
            </b-row>
            <b-button variant="success" class="mt-2" @click="create" :disabled="invalid">
              Crear Canción
            </b-button>
          </ValidationObserver>
        </b-card-body>
        <b-card-footer>
          <div class="text-danger" v-html="error" />
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      error: null
    }
  },
  methods: {
    async create () {
      this.error = null
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
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

</style>
