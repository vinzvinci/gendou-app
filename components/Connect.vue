<template>
  <div class="NuxtConnect">
    <Button @click="connect">Connect Torus Wallet</Button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'ant-design-vue'

export default Vue.extend({
  components: {
    Button,
  },
  methods: {
    connect() {
      this.$torus.connect()
    },
  },
})
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}
</style>
