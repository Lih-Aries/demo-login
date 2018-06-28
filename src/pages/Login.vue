<template>
  <div class="login">
    <label for="userName">用户名：</label>
    <input type="text"
           placeholder="请输入用户名"
           @focus="focusUsername"
           @input="handleUsername"
           v-model="curName">
    <span v-show="uMesVisible"
          :class="uSuc">{{nameMes}}</span>
    <br/>
    <label for="password">密码：</label>
    <input type="password"
           placeholder="请输入密码"
           @focus="focusPassword"
           @input="handlePassword"
           v-model="curPwd">
    <span v-show="pMesVisible"
          :class="pSuc">{{pwdMes}}</span>
    <br/>
    <button type="submit" @click="handleLogin">立即登录</button>
    <p v-if="isLogin">{{loginMes}}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      nameMes: '',
      pwdMes: '',
      loginMes: '',
      uSuc: '',
      pSuc: ''
    };
  },
  computed: {
    ...mapState({
      uMesVisible: state => state.uMesVisible,
      pMesVisible: state => state.pMesVisible,
      isLogin: state => state.isLogin
    }),
    curName: {
      get () {
        return this.$store.state.curName
      },
      set (user) {
        this.$store.commit('validUsername', user)
      }
    },
    curPwd: {
      get () {
        return this.$store.state.curPwd
      },
      set (pwd) {
        this.$store.commit('validPassword', pwd)
      }
    }
  },
  methods: {
    ...mapActions([
      'getFocusUsername',
      'getFocusPassword',
      'getLogin'
    ]),
    focusUsername(){
      this.getFocusUsername();
      this.nameMes = '用户名请输入4~10位字母或数字';
      this.uSuc = 'suc';
    },
    handleUsername() {
      const uReg = /[^\a-zA-Z0-9]/g;
      const len = this.curName.length;
      const isValid = uReg.test(this.curName);
      const isEmpty = !!(this.curName == '');
      const isIt4 = !!(len < 4);
      const isGt20 = !!(len > 20);
      this.getFocusUsername();
      this.nameMes = "OK！";
      this.uSuc = "suc";
      if (isValid) {
        this.uSuc = "err";
        this.nameMes = "禁止输入非法字符";
        this.curName = this.curName.substring(0, len - 1);
      }
      if (isEmpty) {
        this.uSuc = "err";
        this.nameMes = "用户名不能为空";
      }
      if (!isEmpty && isIt4) {
        this.uSuc = "err";
        this.nameMes = "用户名不能少于4个字符";
      }
      if (isGt20) {
        this.uSuc = "err";
        this.nameMes = "用户名不能大于20个字符";
        this.curName = this.curName.substring(0, 20);
      }
    },
    focusPassword() {
      this.getFocusPassword();
      this.pwdMes = '密码由6~12个字母、数字或下划线组合字符';
      this.pSuc = 'suc';
    },
    handlePassword() {
      const pReg1 = /[^\d]/;
      const pReg2 = /[^\a-zA-Z]/;
      const len = this.curPwd.length;
      const isEmpty = !!(this.curPwd == '');
      const isValid = !!(len < 6 || len > 12);
      const isNum = pReg1.test(this.curPwd);
      const isLetter = pReg2.test(this.curPwd);
      this.getFocusPassword();
      this.pwdMes = "Ok！";
      this.pSuc = "suc";
      if (isEmpty) {
        this.pwdMes = "密码不能为空";
        this.pSuc = "err";
      }
      if (isValid) {
        this.pwdMes = "密码为6~12字符";
        this.pSuc = "err";
      }
      if (!isNum) {
        this.pwdMes = "密码不能全为数字";
        this.pSuc = "err";
      }
      if (!isLetter) {
        this.pwdMes = "密码不能全为字母";
        this.pSuc = "err";
      }
    },
    handleLogin() {
      console.log(this)
      this.getLogin();
      this.uSuc = "suc";
      this.pSuc = 'suc';
      this.loginMes = "登录成功！！！";
      if (this.curName == "" || this.curPwd == "") {
        this.uSuc = "err";
        this.pSuc = 'err';
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
