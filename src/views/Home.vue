<template>
  <div>
    这是Home页
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>
<script>
import { Button } from 'element-ui'
export default {
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped></style>
