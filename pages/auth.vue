<template>
  <div>
    <Header />
    <div>Please wait...</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default Vue.extend({
  layout: 'claim',
  computed: {
    ...mapState({
      requestState: (state) => state.github.requestState,
    }),
    ...mapGetters({
      stateFromStorage: 'github/getStateFromStorage',
    }),
  },
  async mounted() {
    const code = this.$route.query.code
    const state = this.$route.query.state

    if (state !== this.stateFromStorage) {
      throw new Error('invalid state value')
    }

    await this.fetchClaimInfo(code)
    if (this.$route.query.error) {
      this.$message.error({
        content: `Error: ${this.$route.query.error}`,
        key: 'fetchtch-claim-info',
      })
    } else {
      this.$router.push('/claim')
    }
  },
  methods: {
    ...mapActions({
      fetchClaimInfo: 'github/fetchClaimInfo',
    }),
  },
})
</script>
