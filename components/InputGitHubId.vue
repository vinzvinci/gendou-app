<template>
  <a-form-model
    ref="inputForm"
    :model="form"
    :rules="rules"
    @submit.prevent="submit"
  >
    <p>Enter your GitHub username to see your claimable coin :)</p>
    <a-form-model-item class="model" prop="githubId">
      <a-input
        v-model="form.githubId"
        type="text"
        class="input display-5"
        placeholder="GitHub username"
      >
      </a-input>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  data() {
    return {
      form: { githubId: '' },
      rules: {
        githubId: [
          {
            required: true,
            message: 'Please input your GitHub username',
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
      this.$refs.inputForm.validate(async (valid) => {
        if (!valid) {
          return
        }

        const key = 'fetch-info'
        this.$message.loading({
          content: 'fetch data...',
          key,
          duration: 0,
        })

        await this.getPrizeInfo(this.form.githubId)

        this.$message.success({
          content: 'Success',
          key,
          duration: 1,
        })

        // emit door open
        this.$emit('startCallback')
      })
    },
    ...mapActions(['getPrizeInfo']),
  },
})
</script>

<style lang="scss" scoped>
p {
  color: black;
  font-size: 1rem;
}

.model {
  margin: 0;
}

.input {
  width: 100%;
  padding: 8px 24px;
  height: initial;
  color: #fff;
  background-color: #0a0a0a;
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
