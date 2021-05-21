<template>
  <form @submit.prevent="submit">
    <a-input
      v-model="githubId"
      type="text"
      class="input display-5"
      placeholder="Enter your GitHub ID"
    >
    </a-input>
  </form>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      githubId: '',
    }
  },
  methods: {
    submit() {
      // TODO: URL これでいいのか確認
      this.$router.push(`/result/${this.githubId}`)
    },
  },
})
</script>

<style lang="scss" scoped>
.input {
  width: auto;
  padding: 8px 24px;
  height: initial;
  color: #fff;
  background-color: #0a0a0a;
  line-height: 32px;
  border-radius: 0;
  border: none;
  &:hover {
    border: none;
  }
}

@media (max-width: 576px) {
  .input {
    padding: 10px 15px;
    line-height: 100%;
  }
}
</style>
<style>
.ant-btn-loading::before {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
