<template>
  <el-row type="flex" justify="center">
    <el-form ref="loginForm" :model="user" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name"/>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="user.pass" type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      rules: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        pass: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.user.name === 'admin' && this.user.pass === '123') {
            // dispatch采用Promise链式调用
            this.$store.dispatch('LoginByUsername', this.user).then(() => {
              this.$router.push({ path: this.redirect || '/' })
            })
          } else {
            this.$message({
              type: 'error',
              message: '用户名或密码错误',
              showClose: true
            })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
