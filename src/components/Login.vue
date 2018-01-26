<template>
	<b-container align="center">
		<div class="loginbox">
			<h3 class="title">{{type}}</h3>
			<hr/>
			<div class="mt-4">
				<div>
					<label class="float-left subtitle mb-0" for="inputName">用户名：</label>
					<b-form-input id="inputName" v-model.trim="name" type="text" :state="nameState" aria-describedby="inputLiveFeeback"></b-form-input>
					<b-form-invalid-feedback class="float-right" id="inputLiveFeedback">用户名必需多于3个字符</b-form-invalid-feedback>
				</div>
				<div class="mt-4">
					<label class="float-left subtitle mb-0" for="inputPassword">密码：</label>
					<b-form-input id="inputPassword" v-model.trim="password" type="password" :state="passwordState" aria-describedby="inputLiveFeeback"></b-form-input>
					<b-form-invalid-feedback class="float-right" id="inputLiveFeedback">密码长度至少是8个字符</b-form-invalid-feedback>
				</div>
				<div v-if="type=='注册'">
					<div class="mt-4">
						<label class="float-left subtitle mb-0" for="inputPasswordAgain">确认密码：</label>
						<b-form-input id="inputPasswordAgain" v-model.trim="repassword" type="password" :state="rePasswordState" aria-describedby="inputLiveFeeback"></b-form-input>
						<b-form-invalid-feedback class="float-right" id="inputLiveFeedback">两次密码必需相同</b-form-invalid-feedback>
					</div>
					<div class="mt-4">
						<label class="float-left subtitle mb-0" for="inputEmail">邮箱：</label>
						<b-form-input id="inputEmail" v-model.trim="email" type="email" :state="emailState" aria-describedby="inputLiveFeeback"></b-form-input>
						<b-form-invalid-feedback class="float-right" id="inputLiveFeedback">请输入正确的邮箱地址</b-form-invalid-feedback>
						<div class="text-muted d-inline-block" align="left">
							<small>
								<strong>提示：</strong>网站开启了注册激活，请使用真实邮箱注册测试，否则无法正常激活。</small>
						</div>
					</div>
				</div>
				<div class="mt-4 text-center">预留阿里滑动验证</div>
				<b-button class="btn-block mt-4" variant="primary">{{type}}</b-button>
				<small class="text-muted" v-if="type=='注册'">注册即代表你同意做个遵纪守法的好公民。</small>
				<div class="mt-2">
					<span>{{type == '登录' ? '没' : '已'}}有账号？</span>
					<span class="operator" @click="loginswitch">{{type == '登录' ? '注册' : '登录'}}</span>
				</div>
			</div>
		</div>
	</b-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      type: '登录',
      name: '',
      password: '',
      repassword: '',
      email: ''
    }
  },
  computed: {
    nameState() {
      return this.name.length > 3 ? true : false
    },
    passwordState() {
      return this.password.length > 7 ? true : false
    },
    rePasswordState() {
      return this.password === this.repassword && this.repassword > 7
        ? true
        : false
    },
    emailState() {
      return this.email.length > 7 ? true : false
    }
  },
  methods: {
    loginswitch: function(event) {
      this.type = this.type == '登录' ? '注册' : '登录'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.loginbox {
  @include block-style;
  width: 432px;
  padding: 40px 40px 20px;
}
h3 {
  letter-spacing: 10px;
}
.operator {
  color: blue;
  cursor: pointer;
}
</style>
