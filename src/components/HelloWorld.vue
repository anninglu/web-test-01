<template>
  <div class="hello">
    <button @click="getdata()">获取用户</button>
    <h3>用户列表</h3>
    <!-- <ul>
      <li v-for="(item, index) in user" :key="index">
        <span>{{ index + 1 }}.{{ item.Uname }}</span>
        <span>{{ item.Usex }}</span>
        <span>{{ item.Uage }}岁</span>
        <button @click="delUser(item.id)">删除</button>
        <button @click="updateHeadle(item)">修改</button>
      </li>
    </ul> -->
    <ul>
      <li v-for="(item, index) in user" :key="index">
        <span>{{ index + 1 }}.{{ item.account }}</span>
        <span>{{ item.password }}</span>
        <button @click="delUser(item.id)">删除</button>
        <button @click="updateHeadle(item)">修改</button>
      </li>
    </ul>
    <div v-if="isUpdate">
      <input type="text" v-model="curAccount" />
      <input type="text" v-model="curPassword" />
      <button @click="updateUser()">保存</button>
    </div>
    <div>
      <input type="text" v-model="account" />
      <input type="text" v-model="password" />
      <button @click="register()">注册</button>
      <button @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      user: [],
      curAccount: null,
      curPassword: null,
      isUpdate:false,
      curId: null,
      account:null,
      password:null
    };
  },
  mounted() {},
  methods: {
    getdata() {
      this.axios
        .post(this.api + "users")
        .then(response => {
          // 请求成功
          console.log(response);
          this.user = response.data.data;
        })
        .catch(error => {
          // 请求失败
          console.log(error);
        });
    },
    delUser(id) {
      this.axios
        .post(this.api + `users/delete`, {
          id
        })
        .then(response => {
          // 请求成功
          console.log(response);
		  this.getdata()
        })
        .catch(error => {
          // 请求失败
          console.log(error);
        });
    },
    updateHeadle(user) {
      this.isUpdate=true
      this.curAccount = user.account;
      this.curPassword = user.password;
      this.curId = user.id;
    },
    updateUser() {
      this.axios
        .post(this.api + "users/update", {
          id: this.curId,
          account: this.curAccount,
          password: this.curPassword,
        })
        .then(response => {
          // 请求成功
		      this.getdata()
          this.isUpdate=false
          console.log(response);
        })
        .catch(error => {
          // 请求失败
          console.log(error);
        });
    },
    register() {
      this.axios
        .post(this.api + "register", {
          account: this.account,
          password: this.password,
        })
        .then(response => {
          // 请求成功
          console.log(response);
        })
        .catch(error => {
          // 请求失败
          console.log(error);
        });
    },
    login(){
      this.axios
        .post(this.api + "login", {
          account: this.account,
          password: this.password,
        })
        .then(response => {
          // 请求成功
          console.log(response);
        })
        .catch(error => {
          // 请求失败
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
