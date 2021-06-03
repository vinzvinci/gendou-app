<template>
  <a-layout class="container fadein">
    <a-layout-content class="content">
      <Result v-if="prize > 0" />
      <RewardNotFound v-else />
    </a-layout-content>
  </a-layout>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  data() {
    return {
      creatorsAPY: '-', // NOTE: not use, now
      stakersAPY: '-',
    }
  },
  fetch() {
    if (process.client) {
      this.generateReuqestState()
    }
  },
  computed: {
    ...mapState({
      prize: (state) => state.reward,
      claimUrl: (state) => state.claimUrl,
    }),
  },
  mounted() {
    if (
      this.$store.state.door.history.length === 0 &&
      this.$store.state.door.closed
    ) {
      this.$store.dispatch('door/control', 'opened')
    }
  },
  methods: {
    ...mapActions({
      generateReuqestState: 'github/generateReuqestState',
    }),
  },
})
</script>

<style lang="scss" scoped>
.container {
  background: transparent;
}
.fadein {
  animation: fadeIn 1.8s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.97);
  }
  to {
    opacity: 100;
    transform: translateY(0) scale(1);
  }
}
</style>
