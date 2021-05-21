<template>
  <div>Please wait...</div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      requestState: (state) => state.github.requestState,
    }),
  },
  async mounted() {
    const code = this.$route.query.code
    const state = this.$route.query.state

    // TODO: check state value
    console.log(code, state, this.requestState)

    await this.fetchClaimInfo(code)
    if (this.$route.query.error) {
      console.log(this.$route.query.error)
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
