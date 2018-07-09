<template>
  <div class="login">
    <label for="userName">用户名：</label>
    <input type="text"
           placeholder="请输入用户名"
           @focus="focusUsername"
           @input="handleUsername"
           :value="curName">
    <span v-show="uMesVisible"
          :class="uSuc">{{nameMes}}</span>
    <br/>
    <label for="password">密码：</label>
    <input type="password"
           placeholder="请输入密码"
           @focus="focusPassword"
           @input="handlePassword"
           :value="curPwd">
    <span v-show="pMesVisible"
          :class="pSuc">{{pwdMes}}</span>
    <br/>
    <button type="submit" @click="handleLogin">立即登录</button>
    <p v-if="isLogin">{{loginMes}}</p>
    <div class="modal" v-show="modal">
      <p>登录中...</p>
      <router-link to="/todo" class="btn">确定</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// import Modal from '~/components/Modal';
export default {
  // components: {
  //   Modal
  // },
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
      isLogin: state => state.isLogin,
      modal: state => state.modal
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
      // 'getValidUsername',
      'getFocusPassword',
      // 'getValidPassword',
      'getLogin',
      'getModal'
    ]),
    focusUsername(){
      this.getFocusUsername();
      this.nameMes = '用户名请输入4~20位字母或数字';
      this.uSuc = 'suc';
    },
    handleUsername(e) {
      const uReg = /[^\a-zA-Z0-9]/g;
      const len = e.target.value.length;
      const isValid = uReg.test(e.target.value);
      const isEmpty = !!(e.target.value == '');
      const isIt4 = !!(len < 4);
      const isGt20 = !!(len > 20);
      this.curName = e.target.value;
      this.nameMes = "OK！";
      this.uSuc = "suc";
      if (isIt4) {
        this.uSuc = 'err';
        this.nameMes = "用户名不能少于4个字符";
        this.curName = e.target.value;
      }
      if (isGt20) {
        this.uSuc = 'err';
        this.nameMes = "用户名不能大于20个字符";
        const curVal = e.target.value.substring(0, 20);
        this.curName = curVal;
      }
      if (isValid) {
        this.uSuc = 'err';
        this.nameMes = "禁止输入非法字符";
        this.curName = e.target.value.substring(0, len - 1);
      }
      if (isEmpty) {
        this.uSuc = 'err';
        this.nameMes = "用户名不能为空";
      }
    },
    focusPassword() {
      this.getFocusPassword();
      this.pwdMes = '密码由6~12个字母、数字或下划线组合字符';
      this.pSuc = 'suc';
    },
    handlePassword(e) {
      const pReg1 = /[^\d]/;
      const pReg2 = /[^\a-zA-Z]/;
      const len = e.target.value.length;
      const isEmpty = !!(e.target.value == '');
      const isValid = !!(len < 6 || len > 12);
      const isNum = pReg1.test(e.target.value);
      const isLetter = pReg2.test(e.target.value);
      this.curPwd = e.target.value;
      this.pwdMes = "Ok！";
      this.pSuc = "suc";
      if (isValid) {
        this.pSuc = 'err';
        this.pwdMes = "密码为6~12字符";
      }
      if (!isNum) {
        this.pSuc = 'err';
        this.pwdMes = "密码不能全为数字";
      }
      if (!isLetter) {
        this.pSuc = 'err';
        this.pwdMes = "密码不能全为字母";
      }
      if (isEmpty) {
        this.pSuc = 'err';
        this.pwdMes = "密码不能为空";
      }
    },
    handleLogin() {
      this.getLogin();
      this.loginMes = "请检查用户名或密码";
      if(this.curName && this.curPwd){
        this.getModal();
        this.loginMes = "登录成功！！！";
      }
    }
  }
};
</script>

<style scoped>
.login{
  margin-top: 200px;
}
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
.modal{
  width: 360px;
  height: 120px;
  border: 1px solid #ddd;
  border-radius: 2px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -180px;
  margin-top: -60px;
}
.btn{
  display: inline-block;
  padding: 6px 15px;
  color: #fff;
  background-color: darkcyan;
  border-radius: 2px;
}
</style>
