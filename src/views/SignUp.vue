<template>
  <div class="row">
      <div class="col-sm-5 m-auto">
          <div class="mb-4 text-center">
              <h1>Sign Up</h1>
          </div>
          <form id="signup-form" @submit.prevent="signupRequest">
              <div class="row">
                    <div class="col-sm-12 form-group" >
                        <label for="email">Email adress</label>
                        <input type="email" id="email" v-model="email" class="form-control from-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" class="form-control from-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-4">Sign Up</button>
                        <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-4">
                            <span class="spinner-border spinner-border-sm btn-spn"></span>
                            wait ...
                        </button>
                    </div>
                    <div class="col-sm-12 form-group mb-5">
                        <p>Already have an account? <router-link to="/login">Login</router-link></p>
                    </div>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            email: '',
            password: '',
            xhrRequest: false
        }
    },
    methods: {
        signupRequest() {
            this.xhrRequest = true;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                () => {
                    this.$router.replace('login');
                },
                (err) => {
                    this.xhrRequest = false;
                    alert(`Error - ${err.message}`);
                }
            );
        }
    }
}
</script>

<style scoped>
.btn-spn {
    position: relative;
    top: -3px;
}
</style>