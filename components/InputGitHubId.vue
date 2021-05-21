<template>
  <a-form-model
    ref="inputForm"
    :model="form"
    :rules="rules"
    @submit.prevent="submit"
  >
    <a-form-model-item prop="githubId">
      <a-input
        v-model="form.githubId"
        type="text"
        class="input display-5"
        placeholder="Enter your GitHub ID"
      >
      </a-input>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: { githubId: '' },
      rules: {
        githubId: [
          {
            required: true,
            message: 'Please input your GitHub Id',
            trigger: 'change',
          },
        ],
      },
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'githubid-input' })
  },
  methods: {
    submit() {
      this.$refs.inputForm.validate((valid) => {
        if (valid) {
          console.log('form value: ', this.form.githubId)

          // TODO: request info API

          // emit door open
          this.$emit('startCallback')
        }
      })
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
