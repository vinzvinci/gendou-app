<template>
  <div ref="lavContainer" class="door-animation"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    width: {
      type: Number,
      required: true,
      defaults: 400,
    },
    start: {
      type: Boolean,
      defaults: false,
    },
  },
  watch: {
    start(val, _old) {
      if (val === true) {
        this.anim.play()
      }
    },
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: this.options.animationData.default,
      rendererSettings: this.options.rendererSettings,
    })
    this.anim.addEventListener('complete', () => {
      this.$emit('complete', true)
    })
  },
}
</script>

<style lang="scss" scoped>
.door-animation {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  background: url('/images/fantasy-sky_90839-278.jpg') no-repeat center center;
  background-size: auto 100%;
}
@media (max-width: 576px) {
  .door-animation {
    width: 100%;
  }
}
</style>
