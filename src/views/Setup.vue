<template>
  <div class="row">
    <div class="columns">Space ID:</div>
    <div class="columns">
      <input type="text" v-model="baseUrl" />
    </div>
    <div class="columns">API Key:</div>
    <div class="columns">
      <input type="text" v-model="apiKey" />
    </div>
    <div class="columns">
      <button v-on:click="save()">Get Projects</button>isAuthenticated: {{ isAuthenticated }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    baseUrl: {
      get () {
        return this.$store.state.setup.baseUrl
      },
      set (value) {
        this.$store.commit('setup/updateBaseUrl', value)
      }
    },
    apiKey: {
      get () {
        return this.$store.state.setup.apiKey
      },
      set (value) {
        this.$store.commit('setup/updateApiKey', value)
      }
    },
    ...mapGetters({
      isAuthenticated: 'setup/isAuthenticated'
    })
  },
  methods: {
    save (event) {
      this.$store.dispatch('setup/authenticate')
    },
    ...mapActions([
      'setup/authenticate'
    ])
  }
}
</script>
