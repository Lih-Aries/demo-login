<template>
  <div class="login">
    <label for="userName">用户名：</label>
    <input type="text"
           placeholder="请输入用户名"
           @focus="focusUserName"
           @input="handleUserName"
           v-model="curName">
    <span v-show="uMesVisible"
          :class="isSuc">{{nameMes}}</span>
    <br/>
    <label for="password">密码：</label>
    <input type="password"
           placeholder="请输入密码"
           @focus="focusPassword"
           @input="handlePassword"
           v-model="curPwd">
    <span v-show="pMesVisible"
          :class="isSuc">{{pwdMes}}</span>
    <br/>
    <button type="submit" @click="handleLogin">立即登录</button>
    <p v-if="isLogin">{{loginMes}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      curName: "",
      curPwd: "",
      nameMes: "",
      pwdMes: "",
      loginMes: "",
      uMesVisible: false,
      pMesVisible: false,
      isLogin: false,
      isSuc: ""
    };
  },
  methods: {
    // 用户名输入框获取焦点
    focusUserName: function() {
      this.uMesVisible = true;
      this.nameMes = "用户名请输入4~10位字母或数字";
      this.isSuc = "suc";
    },
    // 用户名输入
    handleUserName: function(e) {
      const uReg = /[^\a-zA-Z0-9]/g;
      const len = e.target.value.length;
      if (uReg.test(e.target.value)) {
        // 含有非法字符
        this.isSuc = "err";
        this.nameMes = "禁止输入非法字符";
        this.curName = e.target.value.substring(0, len - 1);
      } else if (e.target.value == "") {
        // 用户名为空
        this.isSuc = "err";
        this.nameMes = "用户名不能为空";
      } else if (len < 4) {
        // 少于4个字符
        this.isSuc = "err";
        this.nameMes = "用户名不能少于4个字符";
      } else if (len > 20) {
        // 大于20个字符
        this.isSuc = "err";
        this.nameMes = "用户名不能大于20个字符";
        this.curName = e.target.value.substring(0, 20);
      } else {
        // 合法字符
        this.uMesVisible = true;
        this.nameMes = "OK！";
        this.isSuc = "suc";
      }
    },
    // 密码输入框获取焦点
    focusPassword: function() {
      this.pMesVisible = true;
      this.pwdMes = "密码由6~12个字母、数字或下划线组合字符";
      this.isSuc = "suc";
    },
    // 密码输入
    handlePassword: function() {
      const pReg1 = /[^\d]/;
      const pReg2 = /[^\a-zA-Z]/;
      const len = this.curPwd.length;
      if (len == 0) {
        this.pwdMes = "密码不能为空";
        this.isSuc = "err";
      } else if (len < 6 || len > 12) {
        this.pwdMes = "密码为6~12字符";
        this.isSuc = "err";
      } else if (!pReg1.test(this.curPwd)) {
        this.pwdMes = "密码不能全为数字";
        this.isSuc = "err";
      } else if (!pReg2.test(this.curPwd)) {
        this.pwdMes = "密码不能全为字母";
        this.isSuc = "err";
      } else {
        this.pMesVisible = true;
        this.pwdMes = "Ok！";
        this.isSuc = "suc";
      }
    },
    handleLogin: function() {
      this.isLogin = true;
      this.isSuc = "err";
      this.loginMes = "登录成功！！！";
      if (this.curName == "" || this.curPwd == "") {
        this.loginMes = "请检查用户名或密码";
      }
    }
  }
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 100px;
  text-align: right;
}
input {
  width: 220px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 8px 15px;
  margin-bottom: 15px;
}
button {
  padding: 12px 36px;
  color: #fff;
  cursor: pointer;
  background-color: darkcyan;
  border: none;
  border-radius: 2px;
}
span {
  padding-left: 10px;
}
.suc {
  color: #10bf6e;
}
.err {
  color: #e03b15;
}
</style>
