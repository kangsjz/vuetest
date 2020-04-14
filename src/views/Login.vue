<template>
  <div class="login_content">
    <div class="login_box">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form class="login_in" :model="form" :rules="rules" ref="formref">
        <!-- 登陆表单 -->
        <el-form-item prop="username">
          <!-- 用户名 -->
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <!-- 密码 -->
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <!-- 按钮 -->
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="resetform">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Form, FormItem, Input, Button, Message } from 'element-ui'

export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Button.name]: Button
  },
  methods: {
    resetform() {
      this.$refs.formref.resetFields()
    },
    login() {
      this.$refs.formref.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$axios.post('login', this.form)
        console.log(res)

        if (res.meta.status !== 200) {
          Message.error('登录失败')
        } else {
          Message.success('登录成功')
          window.sessionStorage.setItem('token', res.data.token)
        }
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_content {
  width: 100%;
  height: 100%;
  background-color: rgb(127, 129, 245);
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    .logo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0 0 10px #eeeeee;
      padding: 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #dddddd;
      }
    }
    .login_in {
      position: relative;
      padding: 0 50px;
      top: 35%;
      .btn {
        display: flex;
        justify-content: flex-end;
        margin-right: 50px;
      }
    }
  }
}
</style>
