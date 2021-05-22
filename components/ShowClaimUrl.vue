<template>
  <div>
    <a :href="claimUrl">
      {{ claimUrl }}
    </a>

    <div class="next">
      <p class="description display-6">
        Stake your DEV for an OSS project to earn
        {{ stakersAPY }}%/year<br />
        and support an OSS project by {{ creatorsAPY }} %/year
        <a href="/" class="how-to">How to stake?</a>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  layout: 'claim',
  computed: {
    ...mapState({
      claimUrl: (state) => state.claimUrl,
    }),
  },
})
</script>
