<template>
  <div class="container">
    <div><a-icon type="loading" /> Please wait...</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default Vue.extend({
  layout: 'blank',
  computed: {
    ...mapState({
      requestState: (state) => state.github.requestState,
    }),
    ...mapGetters({
      stateFromStorage: 'github/getStateFromStorage',
    }),
  },
  async mounted() {
    this.$store.dispatch('door/control', 'opened')
    const code = this.$route.query.code
    const state = this.$route.query.state

    if (state !== this.stateFromStorage) {
      throw new Error('invalid state value')
    }

    await this.fetchInfoByCode(code)
    if (this.$route.query.error) {
      this.$message.error({
        content: `Error: ${this.$route.query.error}`,
        key: 'fetchtch-claim-info',
      })
    } else {
      this.$router.push('/result')
    }
  },
  methods: {
    ...mapActions({
      fetchInfoByCode: 'github/fetchInfoByCode',
    }),
    ...mapMutations({
      setCurrentStep: 'claim/setCurrentStep',
    }),
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  justify-content: center;
  align-content: center;
}
</style>
